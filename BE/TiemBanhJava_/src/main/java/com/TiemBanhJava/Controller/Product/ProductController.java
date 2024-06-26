package com.TiemBanhJava.Controller.Product;

import com.TiemBanhJava.DTO.OrderDTO;
import com.TiemBanhJava.DTO.ProductDTO;
import com.TiemBanhJava.Models.Orders;
import com.TiemBanhJava.Models.Product;
import com.TiemBanhJava.Response.Order.ListOrderResponse;
import com.TiemBanhJava.Response.Order.OrderResponse;
import com.TiemBanhJava.Response.Product.ListProductResponse;
import com.TiemBanhJava.Response.Product.ProductResponse;
import com.TiemBanhJava.Service.Product.IProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/product")
@RequiredArgsConstructor
public class ProductController {
    private final IProductService productService;

    @GetMapping("/list")
    public ResponseEntity<ListProductResponse> getAllProduct(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageRequest pageRequest = PageRequest.of(page,limit, Sort.by("productID").descending());
        Page<ProductResponse> productResponsesPage = productService.getList(pageRequest);
        int totalPages = productResponsesPage.getTotalPages();
        List<ProductResponse> productResponses =productResponsesPage.getContent();
        return ResponseEntity.ok(ListProductResponse.builder()
                .productResponses(productResponses)
                .totalPage(totalPages)
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductByID (@Valid @PathVariable int id){
        try{
            Product product = productService.getbyID(id);
            ProductResponse productResponse = ProductResponse.fromProduct(product);
            return ResponseEntity.ok(productResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Không tìm thấy Product với id trên");
        }
    }

    @PostMapping(value = "/insert", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> insertProduct(@Valid @ModelAttribute ProductDTO productDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            productService.create(productDTO);
            return ResponseEntity.ok("Thêm mới Product" + productDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping(value = "/update/{id}",  consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> updateProduct(@PathVariable int id ,@Valid @ModelAttribute ProductDTO productDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            productService.update(id,productDTO);
            return ResponseEntity.ok("Cập nhật Product thành công " + productDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id) {
        try{
            productService.delete(id);
            return ResponseEntity.ok("Xóa Product thành công " );
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

package com.TiemBanhJava.Controller.Product;

import com.TiemBanhJava.DTO.ImageProductDTO;
import com.TiemBanhJava.DTO.ProductDTO;
import com.TiemBanhJava.DTO.ProductDetailDTO;
import com.TiemBanhJava.Models.Product;
import com.TiemBanhJava.Models.ProductDetail;
import com.TiemBanhJava.Response.Product.ListProductDetailResponse;
import com.TiemBanhJava.Response.Product.ListProductResponse;
import com.TiemBanhJava.Response.Product.ProductDetailResponse;
import com.TiemBanhJava.Response.Product.ProductResponse;
import com.TiemBanhJava.Service.Product.IProductDetailService;
import com.TiemBanhJava.Service.Product.IProductService;
import com.TiemBanhJava.Service.Product.ProductDetailService;
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
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/productDetail")
@RequiredArgsConstructor
public class PorductDetailController {
    private final IProductDetailService productService;


    @GetMapping("/list")
    public ResponseEntity<ListProductDetailResponse> getAllProductDetail(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageRequest pageRequest = PageRequest.of(page,limit, Sort.by("productDetailID").descending());
        Page<ProductDetailResponse> productDetailResponsesPage = productService.getList(pageRequest);
        int totalPages = productDetailResponsesPage.getTotalPages();
        List<ProductDetailResponse> productResponses =productDetailResponsesPage.getContent();
        return ResponseEntity.ok(ListProductDetailResponse.builder()
                .productDetailResponses(productResponses)
                .totalPage(totalPages)
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductDetailByID (@Valid @PathVariable int id){
        try{
            ProductDetailResponse productResponse = productService.getProductDetailWithImages(id);
            return ResponseEntity.ok(productResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Không tìm thấy Product với id trên");
        }
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insertProductDetail(@Valid @RequestBody ProductDetailDTO productDTO, BindingResult result) {
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
    @PostMapping(value = "/insertImage/{id}",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> insertImage(@Valid @ModelAttribute ImageProductDTO imageProductDTO, @PathVariable int id, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            List<MultipartFile> files = imageProductDTO.getImage_path();
            if(files.size() > 5) {
                return ResponseEntity.badRequest().body( "Bạn thêm quá 5 ảnh");

            }
            if(files.size() ==0){
                return ResponseEntity.badRequest().body( "Bạn chưa thêm ảnh nào!");
            }
            productService.saveImage(id, imageProductDTO);
            return ResponseEntity.ok("Thêm mới Ảnh" + imageProductDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateProductDetail(@PathVariable int id ,@Valid @RequestBody ProductDetailDTO productDTO, BindingResult result) {
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

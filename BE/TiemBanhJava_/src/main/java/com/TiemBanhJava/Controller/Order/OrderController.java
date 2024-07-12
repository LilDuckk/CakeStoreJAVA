package com.TiemBanhJava.Controller.Order;

import com.TiemBanhJava.DTO.CategoryDTO;
import com.TiemBanhJava.DTO.OrderDTO;
import com.TiemBanhJava.Models.Category;
import com.TiemBanhJava.Models.Orders;
import com.TiemBanhJava.Response.Category.CategoryResponse;
import com.TiemBanhJava.Response.Order.ListOrderResponse;
import com.TiemBanhJava.Response.Order.OrderResponse;
import com.TiemBanhJava.Service.Order.IOrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/order")
@RequiredArgsConstructor
public class OrderController {
    private final IOrderService orderService;

    @GetMapping("/list")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<ListOrderResponse> getAllOrder(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageRequest pageRequest = PageRequest.of(page,limit, Sort.by("orderID").descending());
        Page<OrderResponse> orderResponsePage = orderService.getList(pageRequest);
        int totalPages = orderResponsePage.getTotalPages();
        List<OrderResponse> orderResponses =orderResponsePage.getContent();
        return ResponseEntity.ok(ListOrderResponse.builder()
                .orderRespones(orderResponses)
                .totalPage(totalPages)
                .build());
    }
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> getOrderByID (@Valid @PathVariable("id")int id){
        try{
            Orders orders = orderService.getbyID(id);
            OrderResponse orderResponse = OrderResponse.fromOrder(orders);
            return ResponseEntity.ok(orderResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Không tìm thấy order với id trên");
        }
    }

    @PostMapping("/insert")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> insertOrder(@Valid @RequestBody OrderDTO orderDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            orderService.create(orderDTO);
            return ResponseEntity.ok("Thêm mới Order Detail" + orderDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> updateOrder(@PathVariable int id ,@Valid @RequestBody OrderDTO orderDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            orderService.update(id,orderDTO);
            return ResponseEntity.ok("Cập nhật Order thành công " + orderDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> deleteCategory(@PathVariable int id) {
        try{
            orderService.delete(id);
            return ResponseEntity.ok("Xóa order thành công " );
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

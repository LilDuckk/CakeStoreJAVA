package com.TiemBanhJava.Controller.Order;

import com.TiemBanhJava.DTO.OrderDTO;
import com.TiemBanhJava.DTO.OrderDetailDTO;
import com.TiemBanhJava.Models.OrderDetail;
import com.TiemBanhJava.Models.Orders;
import com.TiemBanhJava.Response.Order.ListOrderDetailResponse;
import com.TiemBanhJava.Response.Order.ListOrderResponse;
import com.TiemBanhJava.Response.Order.OrderDetailResponse;
import com.TiemBanhJava.Response.Order.OrderResponse;
import com.TiemBanhJava.Service.Order.IOrderDetailService;
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
@RequestMapping("${api.prefix}/orderDetail")
@RequiredArgsConstructor
public class OrderDetailController {
    private final IOrderDetailService orderDetailService;

    @GetMapping("/list")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<ListOrderDetailResponse> getAllOrder(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageRequest pageRequest = PageRequest.of(page,limit, Sort.by("orderDetailID").descending());
        Page<OrderDetailResponse> orderDetailResponsePage = orderDetailService.getList(pageRequest);
        int totalPages = orderDetailResponsePage.getTotalPages();
        List<OrderDetailResponse> orderDetailResponse =orderDetailResponsePage.getContent();
        return ResponseEntity.ok(ListOrderDetailResponse.builder()
                .orderDetailResponseList(orderDetailResponse)
                .totalPage(totalPages)
                .build());
    }
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> getOrderDetailByID (@Valid @PathVariable("id")int id){
        try{
            OrderDetail ordersDetail = orderDetailService.getbyID(id);
            OrderDetailResponse orderDetailResponse = OrderDetailResponse.fromOrderDetail(ordersDetail);
            return ResponseEntity.ok(ordersDetail);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Không tìm thấy orderDetail với id trên");
        }
    }

    @PostMapping("/insert")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> insertOrderDetail(@Valid @RequestBody OrderDetailDTO orderDetailDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            orderDetailService.create(orderDetailDTO);
            return ResponseEntity.ok("Thêm mới Order Detail" + orderDetailDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> updateOrderDetail(@PathVariable int id ,@Valid @RequestBody OrderDetailDTO orderDetailDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            orderDetailService.update(id,orderDetailDTO);
            return ResponseEntity.ok("Cập nhật Order Detail thành công " + orderDetailDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> deleteCategory(@PathVariable int id) {
        try{
            orderDetailService.delete(id);
            return ResponseEntity.ok("Xóa Order Detail thành công " );
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

package com.TiemBanhJava.Service.Order;

import com.TiemBanhJava.DTO.OrderDTO;
import com.TiemBanhJava.DTO.OrderDetailDTO;
import com.TiemBanhJava.Models.OrderDetail;
import com.TiemBanhJava.Models.Orders;
import com.TiemBanhJava.Response.Order.OrderDetailResponse;
import com.TiemBanhJava.Response.Order.OrderResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
public interface IOrderDetailService {
    OrderDetail create(OrderDetailDTO orderDetailDTO) throws Exception;
    OrderDetail getbyID(int id) throws Exception;
    OrderDetail update(int id, OrderDetailDTO orderDetailDTO) throws Exception;
    void delete(int id) throws Exception;
    Page<OrderDetailResponse> getList(PageRequest pageRequest);
}

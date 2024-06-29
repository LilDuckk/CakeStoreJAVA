package com.TiemBanhJava.Service.Order;

import com.TiemBanhJava.DTO.CategoryDTO;
import com.TiemBanhJava.DTO.OrderDTO;
import com.TiemBanhJava.Models.Category;
import com.TiemBanhJava.Models.Orders;
import com.TiemBanhJava.Response.Category.CategoryResponse;
import com.TiemBanhJava.Response.Order.OrderResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IOrderService {
    Orders create(OrderDTO orderDTO) throws Exception;
    Orders getbyID(int id) throws Exception;
    Orders update(int id, OrderDTO orderDTO) throws Exception;
    void delete(int id) throws Exception;
    Page<OrderResponse> getList(PageRequest pageRequest);
}

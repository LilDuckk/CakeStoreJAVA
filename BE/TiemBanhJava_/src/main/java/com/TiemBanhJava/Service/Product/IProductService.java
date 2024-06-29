package com.TiemBanhJava.Service.Product;

import com.TiemBanhJava.DTO.OrderDTO;
import com.TiemBanhJava.DTO.ProductDTO;
import com.TiemBanhJava.Models.Orders;
import com.TiemBanhJava.Models.Product;
import com.TiemBanhJava.Response.Order.OrderResponse;
import com.TiemBanhJava.Response.Product.ProductResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IProductService {
    Product create(ProductDTO productDTO) throws Exception;
    Product getbyID(int id) throws Exception;

    Product update(int id, ProductDTO productDTO) throws Exception;
    void delete(int id) throws Exception;
    Page<ProductResponse> getList(PageRequest pageRequest);
}

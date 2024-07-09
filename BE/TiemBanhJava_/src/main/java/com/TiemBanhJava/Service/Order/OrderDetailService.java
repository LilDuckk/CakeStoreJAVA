package com.TiemBanhJava.Service.Order;

import com.TiemBanhJava.DTO.OrderDetailDTO;
import com.TiemBanhJava.Exeception.DataNotFoundException;
import com.TiemBanhJava.Models.OrderDetail;
import com.TiemBanhJava.Models.Orders;
import com.TiemBanhJava.Models.Product;
import com.TiemBanhJava.Repository.OrderDetailRepository;
import com.TiemBanhJava.Repository.OrderRepository;
import com.TiemBanhJava.Repository.ProductRepository;
import com.TiemBanhJava.Response.Order.OrderDetailResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderDetailService implements IOrderDetailService{
    private final OrderDetailRepository orderDetailRepository;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Override
    @Transactional
    public OrderDetail create(OrderDetailDTO orderDetailDTO) throws DataNotFoundException {
        Product product = productRepository.findById(orderDetailDTO.getProductID()).orElseThrow(() -> new DataNotFoundException("Không tìm thấy Product với id"));
        Orders orders = orderRepository.findById(orderDetailDTO.getOrderID()).orElseThrow(() -> new DataNotFoundException("Không tìm thấy Orders với id"));
        if (product.isDelete() != true && orders.isDelete() != true) {
            OrderDetail orderDetail = OrderDetail.builder()
                    .order(orders)
                    .product(product)
                    .cost(orderDetailDTO.getCost())
                    .description(orderDetailDTO.getDescription())
                    .build();
            orderDetail.setDelete(false);
            orders.addOrderDetail(orderDetail);
            return orderDetailRepository.save(orderDetail);
        } else {
            return null;
        }
    }


    @Override
    public OrderDetail getbyID(int id) throws Exception {
        return orderDetailRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm thấy OrderDetail với id"));
    }

    @Override
    @Transactional
    public OrderDetail update(int id, OrderDetailDTO orderDetailDTO) throws Exception {
        OrderDetail orderDetail = orderDetailRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm thấy OrderDetail với id"));
        Product product = productRepository.findById(orderDetailDTO.getProductID()).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product với id"));
        Orders orders = orderRepository.findById(orderDetailDTO.getOrderID()).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Orders với id"));
        if (product.isDelete() != true && orders.isDelete() != true) {
            orderDetail.setProduct(product);
            orderDetail.setOrder(orders);
            orderDetail.setCost(orderDetailDTO.getCost());
            orderDetail.setCost(orderDetailDTO.getCost());
            orders.addOrderDetail(orderDetail);
            return orderDetailRepository.saveAndFlush(orderDetail);
        }else {
            return null;
        }
    }

    @Override
    public void delete(int id) throws Exception {
        OrderDetail orderDetail = orderDetailRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm tấy order với id"+ id));
        if(orderDetail != null) {
            orderDetail.setDelete(true);
            Orders orders = orderDetail.getOrder();
            orders.removeOrderDetails(orderDetail);
            orderDetailRepository.saveAndFlush(orderDetail);
        }
    }

    @Override
    public Page<OrderDetailResponse> getList(PageRequest pageRequest) {
        return orderDetailRepository.findAll(pageRequest).map(orderDetail -> OrderDetailResponse.fromOrderDetail(orderDetail));
    }
}

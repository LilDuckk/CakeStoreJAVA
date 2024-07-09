package com.TiemBanhJava.Service.Order;

import com.TiemBanhJava.DTO.OrderDTO;
import com.TiemBanhJava.Exeception.DataNotFoundException;
import com.TiemBanhJava.Models.*;
import com.TiemBanhJava.Repository.OrderRepository;
import com.TiemBanhJava.Repository.UsersRepository;
import com.TiemBanhJava.Response.Order.OrderResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService{
    private final OrderRepository orderRepository;
    private final UsersRepository usersRepository;


    @Override
    @Transactional
    public Orders create(OrderDTO orderDTO) throws DataNotFoundException {
        Users users = usersRepository.findById(orderDTO.getUserID()).orElseThrow(()-> new DataNotFoundException("Không tìm tấy User"));
        if(users.isDelete() == false){
            if (!PaymentMethod.VALID_STATUSES.contains(orderDTO.getPaymentMethod())){
                throw new IllegalArgumentException("Kiểu thanh toán không hợp lệ: " + orderDTO.getPaymentMethod());
            }
            Orders newOrders = Orders.builder()
                    .user(users)
                    .trackingNumber(orderDTO.getPhoneNumber())
                    .status(OrderStatus.PENDING)
                    .shippingAddress(orderDTO.getShippingAddress())
                    .paymentMethod(orderDTO.getPaymentMethod())
                    .cost(orderDTO.getCost())
                    .build();
            LocalDate shippingDate = (orderDTO.getShippingDate() == null) ? LocalDate.now() : orderDTO.getShippingDate();
            if (shippingDate.isBefore(LocalDate.now())) {
                throw new DataNotFoundException("Date must be at least today !");
            }
            newOrders.setShippingDate(orderDTO.getShippingDate());
            return orderRepository.save(newOrders) ;
        }else {
            System.out.println("Người dùng không tồn tại");
            return null;
        }
    }

    @Override
    public Orders getbyID(int id) throws Exception {
        Orders orders =  orderRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm tấy Order với id"+ id));
        return orders;
    }

    @Override
    @Transactional
    public Orders update(int id, OrderDTO orderDTO) throws Exception {
        Users users = usersRepository.findById(orderDTO.getUserID()).orElseThrow(()-> new DataNotFoundException("Không tìm tấy User"));
        Orders orders =  orderRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm tấy Order với id"+ id));
        if(users.isDelete() == false && orders.isDelete() == false){
            if (!OrderStatus.VALID_STATUSES.contains(orderDTO.getStatus())) {
                throw new IllegalArgumentException("Trạng thái không hợp lệ: " + orderDTO.getStatus());
            }
            if (!PaymentMethod.VALID_STATUSES.contains(orderDTO.getPaymentMethod())){
                throw new IllegalArgumentException("Kiểu thanh toán không hợp lệ: " + orderDTO.getPaymentMethod());
            }
            orders.setTrackingNumber(orderDTO.getPhoneNumber());
            orders.setUser(users);
            orders.setStatus(orderDTO.getStatus());
            orders.setShippingAddress(orderDTO.getShippingAddress());
            orders.setShippingDate(orderDTO.getShippingDate());
            orders.setPaymentMethod(orderDTO.getPaymentMethod());
            orders.setCost(orderDTO.getCost());
            return orderRepository.saveAndFlush(orders);
        }else {
            System.out.println("Người dùng không tồn tại");
            return null;
        }
    }

    @Override
    public void delete(int id) throws Exception {
        Orders orders = orderRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm tấy order với id"+ id));
        if(orders != null) {
            orders.setDelete(true);
            orderRepository.saveAndFlush(orders);
        }
    }

    @Override
    public Page<OrderResponse> getList(PageRequest pageRequest) {
        return orderRepository.findAll(pageRequest).map(orders -> OrderResponse.fromOrder(orders));
    }
}

package com.TiemBanhJava.Service.Order;

import com.TiemBanhJava.DTO.OrderDTO;
import com.TiemBanhJava.Exeception.DataNotFoundException;
import com.TiemBanhJava.Models.Category;
import com.TiemBanhJava.Models.Orders;
import com.TiemBanhJava.Models.Users;
import com.TiemBanhJava.Repository.OrderRepository;
import com.TiemBanhJava.Repository.UsersRepository;
import com.TiemBanhJava.Response.Order.OrderResponse;
import com.TiemBanhJava.Response.User.UserRespone;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.DateTimeException;

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
            Orders newOrders = Orders.builder()
                    .user(users)
                    .orderStatus(false)
                    .cost(orderDTO.getCost())
                    .build();
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
        if(users.isDelete() == false){
            orders.setOrderStatus(orderDTO.isOrderStatus());
            orders.setUser(users);
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

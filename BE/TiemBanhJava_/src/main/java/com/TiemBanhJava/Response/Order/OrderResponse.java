package com.TiemBanhJava.Response.Order;

import com.TiemBanhJava.Models.Orders;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderResponse {
    private int userID;
    private String phoneNumber;
    private String status;
    private String shippingAddress;
    private LocalDate shippingDate;
    private String paymentMethod;
    private float cost;
    private boolean delete;

    public static OrderResponse fromOrder(Orders orders){
        OrderResponse orderRespones = OrderResponse.builder()
                .userID(orders.getUser().getUserID())
                .phoneNumber(orders.getTrackingNumber())
                .status(orders.getStatus())
                .shippingAddress(orders.getShippingAddress())
                .shippingDate(orders.getShippingDate())
                .paymentMethod(orders.getPaymentMethod())
                .cost(orders.getCost())
                .delete(orders.isDelete())
                .build();
        return orderRespones;
    }

}

package com.TiemBanhJava.Response.Order;

import com.TiemBanhJava.Models.Orders;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderResponse {
    private int userID;
    private boolean orderStatus;
    private float cost;

    public static OrderResponse fromOrder(Orders orders){
        OrderResponse orderRespones = OrderResponse.builder()
                .userID(orders.getUser().getUserID())
                .orderStatus(orders.isOrderStatus())
                .cost(orders.getCost())
                .build();
        return orderRespones;
    }

}

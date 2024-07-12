package com.TiemBanhJava.Response.Order;

import com.TiemBanhJava.Models.OrderDetail;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDetailResponse{
    private int orderID;
    private int productID;
    private float cost;
    private String description;

    private boolean delete;

    public static OrderDetailResponse fromOrderDetail(OrderDetail orderDetail){
        OrderDetailResponse orderDetailResponse = OrderDetailResponse.builder()
                .orderID(orderDetail.getOrderDetailID())
                .productID(orderDetail.getProduct().getProductID())
                .cost(orderDetail.getCost())
                .description(orderDetail.getDescription())
                .delete(orderDetail.isDelete())
                .build();
        return orderDetailResponse;
    }
}

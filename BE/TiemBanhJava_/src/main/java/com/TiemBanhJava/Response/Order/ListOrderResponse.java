package com.TiemBanhJava.Response.Order;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListOrderResponse {
    private List<OrderResponse> orderRespones;
    private int totalPage;
}

package com.TiemBanhJava.Response.Order;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListOrderDetailResponse {
    private List<OrderDetailResponse> orderDetailResponseList;
    private int totalPage;
}

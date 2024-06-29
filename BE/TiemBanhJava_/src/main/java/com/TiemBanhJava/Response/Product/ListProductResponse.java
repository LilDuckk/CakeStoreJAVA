package com.TiemBanhJava.Response.Product;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListProductResponse {
    private List<ProductResponse> productResponses;
    private int totalPage;
}

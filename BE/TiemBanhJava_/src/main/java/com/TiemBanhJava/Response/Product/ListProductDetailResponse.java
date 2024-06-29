package com.TiemBanhJava.Response.Product;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListProductDetailResponse {
    private List<ProductDetailResponse> productDetailResponses;
    private int totalPage;
}

package com.TiemBanhJava.Response.Product;

import com.TiemBanhJava.Models.ImageProduct;
import com.TiemBanhJava.Models.ProductDetail;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDetailResponse {
    private int productID;
    private float weight;
    private String description;
    private List<String> imagePaths;

    public static ProductDetailResponse fromProductDetail (ProductDetail productDetail,  List<String> imagePaths) {
        ProductDetailResponse productDetailResponse = ProductDetailResponse.builder()
                .productID(productDetail.getProduct().getProductID())
                .weight(productDetail.getWeight())
                .description(productDetail.getDescription())
                .imagePaths(imagePaths)
                .build();
        return  productDetailResponse;
    }
}

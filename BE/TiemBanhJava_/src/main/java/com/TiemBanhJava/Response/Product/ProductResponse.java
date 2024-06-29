package com.TiemBanhJava.Response.Product;

import com.TiemBanhJava.Models.Product;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductResponse {
    private int categoryID;
    private String name;
    private float price;
    private String thumbnail;

    public static ProductResponse fromProduct (Product product) {
        ProductResponse productResponse = ProductResponse.builder()
                .categoryID(product.getCategory().getCategoryID())
                .name(product.getName())
                .price(product.getPrice())
                .thumbnail(product.getThumbnail())
                .build();
        return  productResponse;
    }
}

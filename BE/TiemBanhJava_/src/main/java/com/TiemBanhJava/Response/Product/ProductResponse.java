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
    private int productID;
    private int categoryID;
    private String name;
    private float price;
    private String thumbnail;
    private boolean delete;

    public static ProductResponse fromProduct (Product product) {
        ProductResponse productResponse = ProductResponse.builder()
                .productID(product.getProductID())
                .categoryID(product.getCategory().getCategoryID())
                .name(product.getName())
                .price(product.getPrice())
                .thumbnail(product.getThumbnail())
                .delete(product.isDelete())
                .build();
        return  productResponse;
    }
}

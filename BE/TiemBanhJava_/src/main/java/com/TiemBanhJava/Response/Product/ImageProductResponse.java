package com.TiemBanhJava.Response.Product;

import com.TiemBanhJava.Models.ImageProduct;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ImageProductResponse {
    private int productID;
    private String image_path;

    public static ImageProductResponse fromImageProduct(ImageProduct imageProduct){
        ImageProductResponse imageProductResponse = ImageProductResponse.builder()
                .productID(imageProduct.getProductDetail().getProductDetailID())
                .image_path(imageProduct.getImage_path())
                .build();
        return imageProductResponse;
    }
}

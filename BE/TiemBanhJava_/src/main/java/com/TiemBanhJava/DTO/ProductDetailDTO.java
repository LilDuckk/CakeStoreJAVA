package com.TiemBanhJava.DTO;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDetailDTO {
    @NotNull(message = "Phải có productID")
    private int productID;
    private float weight;
    private float price;
    private String description;
}

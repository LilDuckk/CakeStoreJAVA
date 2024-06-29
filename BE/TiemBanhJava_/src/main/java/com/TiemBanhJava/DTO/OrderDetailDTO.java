package com.TiemBanhJava.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDetailDTO {
    @NotNull(message = "Phải có orderID")
    private int orderID;
    @NotNull(message = "Phải có productID")
    private int productID;
    private float cost;
    private String description;
}

package com.TiemBanhJava.DTO;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipeDTO {
    @NotNull(message = "Phải có productID")
    private int productID;
    private String description;
}

package com.TiemBanhJava.DTO;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryDTO {

    private String categoryParent;
    @Min(0)
    private int lever;
    @NotBlank
    private  String name;
}

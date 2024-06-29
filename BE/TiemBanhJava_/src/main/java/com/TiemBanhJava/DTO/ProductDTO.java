package com.TiemBanhJava.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDTO {
    @NotNull(message = "Phải có categoryID")
    private int categoryID;
    @NotBlank
    private String name;
    private float price;
    private MultipartFile thumbnail;

}

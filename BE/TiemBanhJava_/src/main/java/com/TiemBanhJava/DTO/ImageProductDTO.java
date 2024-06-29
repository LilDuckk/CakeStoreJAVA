package com.TiemBanhJava.DTO;

import com.TiemBanhJava.Models.ProductDetail;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ImageProductDTO {
    @NotNull(message = "Phải có Id sản phẩm")
    private int productDetail;
    private List<MultipartFile> image_path;
}

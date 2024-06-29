package com.TiemBanhJava.DTO;

import com.TiemBanhJava.Models.Recipe;
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
public class ImageRecipeDTO {
    @NotNull(message = "Phải có Id công thức nấu ăn")
    private int recipe;
    private int status;
    private List<MultipartFile> image_path;
}

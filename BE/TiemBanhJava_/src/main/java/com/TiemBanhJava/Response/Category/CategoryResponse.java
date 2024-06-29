package com.TiemBanhJava.Response.Category;

import com.TiemBanhJava.Models.Category;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategoryResponse {
    private String categoryParent;

    private String name;

    private int lever;

    public static CategoryResponse fromCategory(Category category){
        CategoryResponse categoryRespoes = CategoryResponse.builder()
                .categoryParent(category.getCategoryParent())
                .name(category.getName())
                .lever(category.getLever())
                .build();
        return categoryRespoes;
    }
}

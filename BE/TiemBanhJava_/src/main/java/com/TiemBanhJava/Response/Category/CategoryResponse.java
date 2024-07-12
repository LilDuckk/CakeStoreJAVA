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
    private int categoryID;
    private String categoryParent;

    private String name;

    private int lever;
    private boolean delete;

    public static CategoryResponse fromCategory(Category category){
        CategoryResponse categoryRespoes = CategoryResponse.builder()
                .categoryID(category.getCategoryID())
                .categoryParent(category.getCategoryParent())
                .name(category.getName())
                .lever(category.getLever())
                .delete(category.isDelete())
                .build();
        return categoryRespoes;
    }
}

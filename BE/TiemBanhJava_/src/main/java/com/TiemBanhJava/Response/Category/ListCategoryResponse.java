package com.TiemBanhJava.Response.Category;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListCategoryResponse {
     private List<CategoryResponse> categoryRespoes;
    private int totalPages;
}

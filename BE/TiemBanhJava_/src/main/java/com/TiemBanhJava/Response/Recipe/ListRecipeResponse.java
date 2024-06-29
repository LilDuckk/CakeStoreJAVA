package com.TiemBanhJava.Response.Recipe;

import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListRecipeResponse {
    private List<RecipeResponse> recipeResponses;
    private int totalPage;
}

package com.TiemBanhJava.Response.Recipe;

import com.TiemBanhJava.Models.Recipe;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipeResponse {
    private String description;
    private int productID;
    private List<String> imagePaths;
    private  List<Integer> status;

    public static RecipeResponse fromRecipe(Recipe recipe, List<String> imagePaths, List<Integer> status ) {
        RecipeResponse recipeResponse = RecipeResponse.builder()
                .description(recipe.getDescription())
                .productID(recipe.getProduct().getProductID())
                .imagePaths(imagePaths)
                .status(status)
                .build();
        return recipeResponse;
    }
}

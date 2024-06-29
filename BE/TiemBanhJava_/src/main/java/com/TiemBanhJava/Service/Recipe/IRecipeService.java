package com.TiemBanhJava.Service.Recipe;

import com.TiemBanhJava.DTO.ImageProductDTO;
import com.TiemBanhJava.DTO.ImageRecipeDTO;
import com.TiemBanhJava.DTO.ProductDetailDTO;
import com.TiemBanhJava.DTO.RecipeDTO;
import com.TiemBanhJava.Models.ImageRecipe;
import com.TiemBanhJava.Models.ProductDetail;
import com.TiemBanhJava.Models.Recipe;
import com.TiemBanhJava.Response.Product.ProductDetailResponse;
import com.TiemBanhJava.Response.Recipe.RecipeResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IRecipeService {
    Recipe create(RecipeDTO recipeDTO) throws Exception;
    Recipe getbyID(int id) throws Exception;

    Recipe update(int id, RecipeDTO recipeDTO) throws Exception;
    void delete(int id) throws Exception;
    Page<RecipeResponse> getList(PageRequest pageRequest);
    RecipeResponse getRecipeWithImages(int id) throws Exception;
    String saveImage(int id, ImageRecipeDTO imageRecipeDTO) throws Exception ;
}

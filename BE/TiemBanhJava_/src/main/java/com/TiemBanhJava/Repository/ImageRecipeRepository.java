package com.TiemBanhJava.Repository;

import com.TiemBanhJava.Models.ImageProduct;
import com.TiemBanhJava.Models.ImageRecipe;
import com.TiemBanhJava.Models.ProductDetail;
import com.TiemBanhJava.Models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ImageRecipeRepository extends JpaRepository<ImageRecipe, Integer> {
    List<ImageRecipe> findByRecipe(Recipe recipe);

}

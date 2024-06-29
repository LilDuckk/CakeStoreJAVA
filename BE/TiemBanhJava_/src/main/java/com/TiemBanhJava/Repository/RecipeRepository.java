package com.TiemBanhJava.Repository;

import com.TiemBanhJava.Models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe,Integer> {
}

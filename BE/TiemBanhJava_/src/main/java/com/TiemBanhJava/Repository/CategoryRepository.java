package com.TiemBanhJava.Repository;

import com.TiemBanhJava.Models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Integer> {
}

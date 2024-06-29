package com.TiemBanhJava.Repository;

import com.TiemBanhJava.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}

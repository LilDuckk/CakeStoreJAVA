package com.TiemBanhJava.Repository;

import com.TiemBanhJava.Models.ImageProduct;
import com.TiemBanhJava.Models.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ImageProductRepository extends JpaRepository<ImageProduct, Integer> {
    List<ImageProduct> findByProductDetail(ProductDetail productDetail);

}

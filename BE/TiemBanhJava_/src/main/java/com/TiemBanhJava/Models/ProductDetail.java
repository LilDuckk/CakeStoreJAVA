package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "ProductDetail")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDetail extends BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productDetailID;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "productID")
    private Product product;
    private float weight;
    private String description;

    private float price;

    @PostPersist
    @PostUpdate
    private void updateProductPrice() {
        if (product != null) {
            product.updatePrice();
        }
    }
}

package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Recipe")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Recipe extends BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recipeID;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "productID")
    private Product product;
    @Column(columnDefinition = "TEXT")
    private String description;

}

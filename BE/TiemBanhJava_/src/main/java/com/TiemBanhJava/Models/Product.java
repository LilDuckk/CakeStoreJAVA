package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "Product")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product extends BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productID;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "categoryID")
    private Category category;
    private String name;
    private float price;
    private String thumbnail;


}

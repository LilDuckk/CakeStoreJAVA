package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ImageRecipe")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ImageRecipe extends BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "recipe")
    private Recipe recipe;
    @Column(columnDefinition = "SMALLINT")
    private int status;
    private String image_path;
}

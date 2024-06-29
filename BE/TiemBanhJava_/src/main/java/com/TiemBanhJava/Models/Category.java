package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Category")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Category extends BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int categoryID;
    private String categoryParent;
    private int lever;
    private  String name;

}

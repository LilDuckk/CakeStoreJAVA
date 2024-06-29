package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Entity
@Table(name = "ImageProduct")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ImageProduct extends  BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "productDetail")
    private ProductDetail productDetail;
    private String image_path;
}

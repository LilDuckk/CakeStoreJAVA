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

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ProductDetail> productDetails;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderDetail> orderDetails;

    public void updatePrice() {
        this.price = productDetails.stream()
                .map(ProductDetail::getPrice)
                .reduce(0.0f, Float::sum);
    }

    public void addProductDetail(ProductDetail productDetail) {
        productDetails.add(productDetail);
        productDetail.setProduct(this);
        updatePrice();
    }

    public void removeProductDetail(ProductDetail productDetail) {
        productDetails.remove(productDetail);
        productDetail.setProduct(null);
        updatePrice();
        if (orderDetails != null) {
            for (OrderDetail orderDetail : orderDetails) {
                orderDetail.updateOrderCost();
            }
        }
    }
}

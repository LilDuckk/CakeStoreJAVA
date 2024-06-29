package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "OrdersDetail")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDetail extends BaseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderDetailID;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "orderID")
    private Orders order;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "productID")
    private Product product;

    private float cost;
    private String description;

}

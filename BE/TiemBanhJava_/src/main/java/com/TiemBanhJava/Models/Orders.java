package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "Orders")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Orders extends BaseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderID;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "userID")
    private Users user;
    private boolean orderStatus;
    private float cost;

}

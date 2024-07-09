package com.TiemBanhJava.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


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
    private String trackingNumber;
    private String status;
    private String paymentMethod;
    private String shippingAddress;
    private LocalDate shippingDate;
    private float cost;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<OrderDetail> orderDetails;

    public void updateCost() {
        this.cost = orderDetails.stream()
                .map(OrderDetail::getCost)
                .reduce(0.0f, Float::sum);
    }
    public void addOrderDetail(OrderDetail orderDetail) {
        orderDetails.add(orderDetail);
        orderDetail.setOrder(this);
        updateCost();
    }
    public void removeOrderDetails(OrderDetail details) {
        orderDetails.remove(details);
        details.setOrder(null);
        updateCost();

    }
}

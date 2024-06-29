package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
@Entity
@Table(name = "Users")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Users extends BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userID;
    @Column(name = "userName")
    private String userName;
    @ManyToOne()
    @ToString.Exclude
    @JoinColumn(name = "roleID")
    private Role role;
    @Column(name = "userPassword")
    private String userPassword;
    @Column(name = "phoneNumber")
    private String phoneNumber;
    @Column(name = "userGender")
    private String userGender;
    @Column(name = "userAddress")
    private String userAddress;
    @Column(name = "userBirthDate")
    private Date userBirthDate;
}

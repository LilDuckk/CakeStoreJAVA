package com.TiemBanhJava.Models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Role")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Role extends BaseModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roleID;
    private String roleName;

}

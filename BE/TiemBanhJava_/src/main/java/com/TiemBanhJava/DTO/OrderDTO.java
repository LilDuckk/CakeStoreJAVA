package com.TiemBanhJava.DTO;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDTO {
    @NotNull(message = "Phải có UserID")
    private int userID;
    private boolean orderStatus;
    private float cost;

}

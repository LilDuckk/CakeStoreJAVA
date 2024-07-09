package com.TiemBanhJava.Response.User;

import com.TiemBanhJava.Models.Users;
import lombok.*;

import java.util.Date;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UseResponse {
    public int userID;
    public String userName;
    public String roleName;

    public String phoneNumber;
    public String userGender;
    public String userAddress;
    private Date userBirthDate;

    public static UseResponse fromUser(Users user) {
        UseResponse useResponse = UseResponse.builder()
                .userID(user.getUserID())
                .userName(user.getUserNames())
                .roleName(user.getRole().getRoleName())
                .phoneNumber(user.getPhoneNumber())
                .userAddress(user.getUserAddress())
                .userBirthDate(user.getUserBirthDate())
                .build();
        return useResponse;
    }

}

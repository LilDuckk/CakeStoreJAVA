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
public class UserDetailRespone {
    private int userID;
    private String userName;
    private String roleID;
    private String userGender;
    private String phoneNumber;
    private String userAddress;
    private Date userBirthDate;

    public static UserDetailRespone fromUser(Users user){
        UserDetailRespone useDetailRespone = UserDetailRespone.builder()
                .userID(user.getUserID())
                .userName(user.getUserNames())
                .roleID(user.getRole().getRoleName())
                .phoneNumber(user.getPhoneNumber())
                .userGender(user.getUserGender())
                .userAddress(user.getUserAddress())
                .userBirthDate(user.getUserBirthDate())
                .build();
        return  useDetailRespone;
    }
}

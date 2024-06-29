package com.TiemBanhJava.Service.User;

import com.TiemBanhJava.DTO.UsersDTO;
import com.TiemBanhJava.Models.Users;
import com.TiemBanhJava.Response.User.UserRespone;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.Optional;

public interface IUserService {

        Users createUser(UsersDTO userDTO) throws Exception;
        String login(String phoneNumber, String password) throws Exception;

        Optional<Users> getByPhoneNumber(String phoneNumber) throws Exception;
        Users updateUser(int id, UsersDTO userDTO) throws Exception;

        Users getUser(int id)throws Exception;

        Page<UserRespone> getListUser(PageRequest pageRequest);

        void deleteUser(int id);

}

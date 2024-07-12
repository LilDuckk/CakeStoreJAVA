package com.TiemBanhJava.Service.User;

import com.TiemBanhJava.Components.JwtTokenUtil;
import com.TiemBanhJava.DTO.UsersDTO;
import com.TiemBanhJava.Exeception.DataNotFoundException;
import com.TiemBanhJava.Models.Role;
import com.TiemBanhJava.Models.Users;
import com.TiemBanhJava.Repository.RoleRepository;
import com.TiemBanhJava.Repository.UsersRepository;
import com.TiemBanhJava.Response.User.UseResponse;
import com.TiemBanhJava.Response.User.UserDetailRespone;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.DateTimeException;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class UserService implements IUserService{
    private final UsersRepository usersRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;

    @Override
    public Users createUser(UsersDTO userDTO) throws Exception {
        String phone = userDTO.getPhoneNumber();
        if(usersRepository.existsByPhoneNumber(phone)){
            throw  new DataIntegrityViolationException("Số điện thoại đã tồn tại");
        }
        Users newUser = Users.builder()
                .userName(userDTO.getUserName())
                .userPassword(userDTO.getUserPassword())
                .phoneNumber(userDTO.getPhoneNumber())
                .userGender(userDTO.getUserGender())
                .userAddress(userDTO.getUserAddress())
                .userBirthDate(userDTO.getUserBirthDate())
                .build();
        Role roles = roleRepository.findById(userDTO.getRoleID()) .orElseThrow(()-> new DateTimeException("Không tìm thấy ROLE "));
        newUser.setRole(roles);
        String password = userDTO.getUserPassword();
        String encodedPassword = passwordEncoder.encode(password);
        newUser.setUserPassword(encodedPassword);
        return usersRepository.save(newUser);
    }

    @Override
    public String login(String phoneNumber, String password) throws Exception {
        Optional<Users> user  =  usersRepository.findByPhoneNumber(phoneNumber);
        if(user.isEmpty()){
            throw new DataNotFoundException("SĐT hoặc Mật khẩu không đúng !");
        }
        Users exitingUser = user.get();
        if(!passwordEncoder.matches(password,exitingUser.getPassword())){
            throw new BadCredentialsException("Sai số điện thoại hoặc mật khẩu ");
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(phoneNumber,password,exitingUser.getAuthorities());
        authenticationManager.authenticate(authenticationToken);
        return jwtTokenUtil.generateToken(exitingUser);
    }

    @Override
    public Optional<Users> getByPhoneNumber(String phoneNumber) throws Exception {
        Optional<Users> exitingUser = usersRepository.findByPhoneNumber(phoneNumber);
        return exitingUser;
    }

    @Override
    @Transactional
    public Users updateUser(int id, UsersDTO userDTO) throws Exception {
        Users user = usersRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thấy User theo ID trên"));
        if (userDTO.getUserName() != null && !userDTO.getUserName().isEmpty()) {
            user.setUserName(userDTO.getUserName());
        }

        if (userDTO.getPhoneNumber() != null && !userDTO.getPhoneNumber().isEmpty()) {
            user.setPhoneNumber(userDTO.getPhoneNumber());
        }

        if (userDTO.getUserAddress() != null && !userDTO.getUserAddress().isEmpty()) {
            user.setUserAddress(userDTO.getUserAddress());
        }

        if (userDTO.getUserGender() != null) {
            user.setUserGender(userDTO.getUserGender());
        }

        if (userDTO.getUserPassword() != null && !userDTO.getUserPassword().isEmpty()) {
            String encodedPassword = passwordEncoder.encode(userDTO.getUserPassword());
            user.setUserPassword(encodedPassword);
        }

        return usersRepository.saveAndFlush(user);
    }

    @Override
    public UserDetailRespone getUser(int id) throws Exception {
        return UserDetailRespone.fromUser(usersRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thấy User theo ID trên")));
    }

    @Override
    public Page<UseResponse> getListUser(PageRequest pageRequest) {
        return  usersRepository.findAll(pageRequest).map(user -> UseResponse.fromUser(user));
    }

    @Override
    public void deleteUser(int id) throws DataNotFoundException {
        Users users = usersRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thây User"));
        if(users != null) {
            users.setDelete(true);
            usersRepository.saveAndFlush(users);
        }
    }
}

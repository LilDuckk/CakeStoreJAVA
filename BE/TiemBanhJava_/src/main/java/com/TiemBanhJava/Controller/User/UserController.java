package com.TiemBanhJava.Controller.User;

import com.TiemBanhJava.DTO.UserLoginDTO;
import com.TiemBanhJava.DTO.UsersDTO;
import com.TiemBanhJava.Models.Users;
import com.TiemBanhJava.Response.User.UseResponse;
import com.TiemBanhJava.Response.User.UserDetailRespone;
import com.TiemBanhJava.Response.User.UserListRespone;
import com.TiemBanhJava.Service.User.IUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("${api.prefix}/user")
@RequiredArgsConstructor
public class UserController {
    private final IUserService userService;

    @PostMapping("/register") //http://localhost:2330/VOX/user/register
    public ResponseEntity<?> createUser(@Valid @RequestBody UsersDTO userDTO, BindingResult result){
        try{
            if (result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            if(!userDTO.getUserPassword().equals(userDTO.getRetypePassword())){
                return ResponseEntity.badRequest().body("Mật khẩu xác thực không đúng !!!");
            }
            userService.createUser(userDTO);
            return ResponseEntity.ok("Đăng ký thành công!");
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/login") //http://localhost:2330/VOX/user/login
    public ResponseEntity<Map<String, String>> login(@Valid @RequestBody UserLoginDTO userLoginDTO){
        try {
            String token = userService.login(userLoginDTO.getPhoneNumber(),userLoginDTO.getUserPassword());
            Map<String, String> response = new HashMap<>();
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @GetMapping("/list") // http://localhost:2330/VOX/user/list
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<UserListRespone> getAllUser(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageRequest pageRequest = PageRequest.of(page,limit, Sort.by("userID").descending());
        Page<UseResponse> userPage = userService.getListUser(pageRequest);
        int totalPages = userPage.getTotalPages();
        List<UseResponse> user = userPage.getContent();
        return ResponseEntity.ok(UserListRespone.builder()
                .userResponeList(user)
                .totalPages(totalPages)
                .build());
    }

    @DeleteMapping("/delete/{id}") //    http://localhost:2330/VOX/user/delete
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> deleteUser(@PathVariable int id) throws Exception {
        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.OK).body("Đã xóa thành công User "+ id);
    }

    @GetMapping("/get/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> getUserDetail(@PathVariable int id) throws Exception {
        try {
            UserDetailRespone userDetailRespone = userService.getUser(id);
            return ResponseEntity.ok(userDetailRespone);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Không tìm thấy user");
        }
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody UsersDTO userDTO) throws Exception{
        try{
            Users user = userService.updateUser(id, userDTO);
            UseResponse useResponse = UseResponse.fromUser(user);
            Map<String,Object> object = Map.of(
                    "message", "Updated User successfully",
                    "user", useResponse
            );
            return ResponseEntity.ok(object);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Không tìm thấy user");
        }
    }
}

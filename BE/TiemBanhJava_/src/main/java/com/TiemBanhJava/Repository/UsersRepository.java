package com.TiemBanhJava.Repository;

import com.TiemBanhJava.Models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
    boolean existsByPhoneNumber(String phoneNumber);
    Optional<Users> findByPhoneNumber(String phoneNumber);
}

package com.TiemBanhJava.Models;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.*;

import java.time.LocalDateTime;
@Data//toString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public class BaseModel {
        @Column(name = "created_at")
        private LocalDateTime createdDate;

        @Column(name = "updated_at")
        private LocalDateTime updatedDate;
        @Column(name = "delete")
        private boolean delete;

        @PrePersist
        protected void onCreate() {
            createdDate = LocalDateTime.now();
        }

        @PreUpdate
        protected void onUpdate() {
            updatedDate = LocalDateTime.now();
        }



}

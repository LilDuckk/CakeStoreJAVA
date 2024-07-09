package com.TiemBanhJava.Response.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@AllArgsConstructor
@Data
@Builder
@NoArgsConstructor
public class UserListRespone {
    private List<UseResponse> userResponeList;
    private int totalPages;
}

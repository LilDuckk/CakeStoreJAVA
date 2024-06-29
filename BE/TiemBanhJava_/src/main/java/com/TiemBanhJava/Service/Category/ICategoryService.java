package com.TiemBanhJava.Service.Category;

import com.TiemBanhJava.DTO.CategoryDTO;
import com.TiemBanhJava.Models.Category;
import com.TiemBanhJava.Response.Category.CategoryResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ICategoryService {
    Category create(CategoryDTO categoryDTO) ;
    Category getbyID(int id) throws Exception;
    Category update(int id, CategoryDTO categoryDTO) throws Exception;
    void delete(int id) throws Exception;
    Page<CategoryResponse> getList(PageRequest pageRequest);
}

package com.TiemBanhJava.Service.Category;

import com.TiemBanhJava.DTO.CategoryDTO;
import com.TiemBanhJava.Exeception.DataNotFoundException;
import com.TiemBanhJava.Models.Category;
import com.TiemBanhJava.Repository.CategoryRepository;
import com.TiemBanhJava.Response.Category.CategoryResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.DateTimeException;

@Service
@RequiredArgsConstructor
public class CategoryService implements ICategoryService{
private final CategoryRepository categoryRepository;
    @Override
    @Transactional
    public Category create(CategoryDTO categoryDTO) {
        Category newCategory = Category.builder()
                .categoryParent(categoryDTO.getCategoryParent())
                .name(categoryDTO.getName())
                .lever(categoryDTO.getLever())
                .build();
        newCategory.setDelete(false);
        return categoryRepository.save(newCategory);
    }

    @Override
    public Category getbyID(int id) throws DataNotFoundException {
        Category category = categoryRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm tấy category với id"+ id));
        return category;
    }

    @Override
    @Transactional
    public Category update(int id, CategoryDTO categoryDTO) throws Exception {
        Category category = categoryRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm tấy category với id"+ id));

           category.setCategoryParent(categoryDTO.getCategoryParent());
           category.setLever(categoryDTO.getLever());
           category.setName(categoryDTO.getName());
            category.setDelete(false);
        return categoryRepository.saveAndFlush(category);
    }

    @Override
    @Transactional
    public void delete(int id) throws DataNotFoundException {
        Category category = categoryRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm tấy category với id"+ id));
        if(category != null) {
            category.setDelete(true);
            categoryRepository.saveAndFlush(category);
        }

    }


    @Override
    public Page<CategoryResponse> getList(PageRequest pageRequest) {
        return categoryRepository.findAll(pageRequest).map(category -> CategoryResponse.fromCategory(category));
    }


}

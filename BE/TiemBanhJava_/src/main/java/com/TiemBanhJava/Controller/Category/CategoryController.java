package com.TiemBanhJava.Controller.Category;

import com.TiemBanhJava.DTO.CategoryDTO;
import com.TiemBanhJava.Models.Category;
import com.TiemBanhJava.Response.Category.CategoryResponse;
import com.TiemBanhJava.Response.Category.ListCategoryResponse;
import com.TiemBanhJava.Service.Category.ICategoryService;
import jakarta.persistence.PostUpdate;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/category")
@RequiredArgsConstructor
public class CategoryController {
    private final ICategoryService categoryService;

    @GetMapping("/list")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<ListCategoryResponse> getAllCategory(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageRequest pageRequest = PageRequest.of(page,limit, Sort.by("categoryID").descending());
        Page<CategoryResponse> categoryPage = categoryService.getList(pageRequest);
        int totalPages = categoryPage.getTotalPages();
        List<CategoryResponse> categoryResponses =categoryPage.getContent();
        return ResponseEntity.ok(ListCategoryResponse.builder()
                .categoryResponse(categoryResponses)
                .totalPages(totalPages)
                .build());
    }
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> getCategoryByID (@Valid @PathVariable("id")int id){
        try{
            Category category = categoryService.getbyID(id);
            CategoryResponse categoryResponse = CategoryResponse.fromCategory(category);
            return ResponseEntity.ok(categoryResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Không tìm thấy category với id trên");
        }
    }

    @PostMapping("/insert")
    @PreAuthorize("hasRole('ROLE_ADMIN')  or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> insertCategory(@Valid @RequestBody CategoryDTO categoryDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            categoryService.create(categoryDTO);
            return ResponseEntity.ok("Thêm mới Category" + categoryDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> updateCategory(@PathVariable int id ,@Valid @RequestBody CategoryDTO categoryDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            categoryService.update(id,categoryDTO);
            return ResponseEntity.ok("Cập nhật Category thành công " + categoryDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> deleteCategory(@PathVariable int id) {
        try{
            categoryService.delete(id);
            return ResponseEntity.ok("Xóa Category thành công " );
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

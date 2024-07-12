package com.TiemBanhJava.Controller.Recipe;

import com.TiemBanhJava.DTO.ImageProductDTO;
import com.TiemBanhJava.DTO.ImageRecipeDTO;
import com.TiemBanhJava.DTO.RecipeDTO;
import com.TiemBanhJava.Models.Recipe;
import com.TiemBanhJava.Response.Recipe.ListRecipeResponse;
import com.TiemBanhJava.Response.Recipe.RecipeResponse;
import com.TiemBanhJava.Service.Recipe.IRecipeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("${api.prefix}/recipe")
@RequiredArgsConstructor
public class RecipeController {
    private final IRecipeService recipeService;

    @GetMapping("/list")
    public ResponseEntity<ListRecipeResponse> getAllRecipe(@RequestParam("page") int page, @RequestParam("limit") int limit) {
        PageRequest pageRequest = PageRequest.of(page,limit, Sort.by("recipeID").descending());
        Page<RecipeResponse> recipeResponsesPage = recipeService.getList(pageRequest);
        int totalPages =  recipeResponsesPage.getTotalPages();
        List<RecipeResponse> recipeResponses =recipeResponsesPage.getContent();
        return ResponseEntity.ok(ListRecipeResponse.builder()
                .recipeResponses(recipeResponses)
                .totalPage(totalPages)
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRecipeByID (@Valid @PathVariable int id){
        try{
            RecipeResponse recipeResponse = recipeService.getRecipeWithImages(id);
            return ResponseEntity.ok(recipeResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Không tìm thấy Recipe với id trên");
        }
    }

    @PostMapping("/insert")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> insertRecipe(@Valid @RequestBody RecipeDTO recipeDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            Recipe recipe = recipeService.create(recipeDTO);
            RecipeResponse recipeResponse = recipeService.toRecipeResponse(recipe);
            Map<String,Object> object = Map.of(
                    "message", "Updated recipe successfully",
                    "recipe", recipeResponse
            );
            return ResponseEntity.ok(object);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> updateRecipe(@PathVariable int id ,@Valid @RequestBody RecipeDTO recipeDTO, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            Recipe recipe =recipeService.update(id,recipeDTO);
            RecipeResponse recipeResponse = recipeService.toRecipeResponse(recipe);
            Map<String,Object> object = Map.of(
                    "message", "Updated recipe successfully",
                    "recipe", recipeResponse
            );
            return ResponseEntity.ok("Cập nhật Recipe thành công " + recipeDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PostMapping(value = "/insertImage/{id}",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> insertImage(@Valid @ModelAttribute ImageRecipeDTO imageRecipeDTO, @PathVariable int id, BindingResult result) {
        try{
            if(result.hasErrors()) {
                List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
                return ResponseEntity.badRequest().body(errorMessages);
            }
            List<MultipartFile> files = imageRecipeDTO.getImage_path();
            if(files.size() > 5) {
                return ResponseEntity.badRequest().body( "Bạn thêm quá 5 ảnh");

            }
            if(files.size() ==0){
                return ResponseEntity.badRequest().body( "Bạn chưa thêm ảnh nào!");
            }
            recipeService.saveImage(id, imageRecipeDTO);
            return ResponseEntity.ok("Thêm mới Ảnh" + imageRecipeDTO);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_EMPLOYEE')")
    public ResponseEntity<?> deleteRecipe(@PathVariable int id) {
        try{
            recipeService.delete(id);
            return ResponseEntity.ok("Xóa Recipe thành công " );
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

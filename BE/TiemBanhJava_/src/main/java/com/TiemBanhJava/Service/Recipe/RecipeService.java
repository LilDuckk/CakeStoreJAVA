package com.TiemBanhJava.Service.Recipe;

import com.TiemBanhJava.DTO.ImageProductDTO;
import com.TiemBanhJava.DTO.ImageRecipeDTO;
import com.TiemBanhJava.DTO.RecipeDTO;
import com.TiemBanhJava.Exeception.DataNotFoundException;
import com.TiemBanhJava.Models.*;
import com.TiemBanhJava.Repository.ImageRecipeRepository;
import com.TiemBanhJava.Repository.ProductRepository;
import com.TiemBanhJava.Repository.RecipeRepository;
import com.TiemBanhJava.Response.Product.ProductDetailResponse;
import com.TiemBanhJava.Response.Recipe.RecipeResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecipeService implements IRecipeService{
    private final RecipeRepository recipeRepository;
    private final ProductRepository productRepository;
    private final ImageRecipeRepository imageRecipeRepository;


    @Override
    @Transactional
    public Recipe create(RecipeDTO recipeDTO) throws Exception {
        Product product = productRepository.findById(recipeDTO.getProductID()).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product với id"));
        if(product.isDelete() == false){
            Recipe recipe = Recipe.builder()
                    .product(product)
                    .description(recipeDTO.getDescription())
                    .build();
        return recipeRepository.save(recipe);
        }else {
            return null;
        }
    }

    @Override
    public Recipe getbyID(int id) throws Exception {
        return recipeRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thấy Recipe với id trên"));
    }

    @Override
    @Transactional
    public Recipe update(int id, RecipeDTO recipeDTO) throws Exception {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thấy Recipe với id trên"));
        Product product = productRepository.findById(recipeDTO.getProductID()).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product với id"));
        if(product.isDelete() == false){
            recipe.setProduct(product);
            recipe.setDescription(recipeDTO.getDescription());
            return recipeRepository.saveAndFlush(recipe);
        }else {
            return null;
        }
    }

    @Override
    public void delete(int id) throws Exception {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thấy Recipe với id trên"));
        if(recipe != null) {
            recipe.setDelete(true);
            recipeRepository.saveAndFlush(recipe);
        }
    }

    @Override
    public Page<RecipeResponse> getList(PageRequest pageRequest) {
        return recipeRepository.findAll(pageRequest).map(this::toRecipeResponse);
    }

    @Override
    @Transactional
    public String saveImage(int id, ImageRecipeDTO imageRecipeDTO) throws Exception {
        List<MultipartFile> files = imageRecipeDTO.getImage_path();
        files = files == null ? new ArrayList<MultipartFile>() :files;
        for(int i = 0; i< files.size(); i++){
            MultipartFile file = files.get(i);
            if (file.getSize() > 10 * 1024 * 1024) {
                throw new ResponseStatusException(HttpStatus.PAYLOAD_TOO_LARGE, "File ảnh của bạn quá lớn, tối đa là 10MB");
            }

            String contentType = file.getContentType();
            if (contentType == null || !contentType.startsWith("image/")) {
                throw new ResponseStatusException(HttpStatus.UNSUPPORTED_MEDIA_TYPE, "File này phải là ảnh");
            }

            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
            Path uploadDir = Paths.get("uploads");
            if (!Files.exists(uploadDir)) {
                Files.createDirectories(uploadDir);
            }

            Path destination = uploadDir.resolve(uniqueFileName);
            Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);

            Recipe recipe = recipeRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Recipe  với id"));
            ImageRecipe imageRecipe = ImageRecipe.builder()
                    .status(i)
                    .recipe(recipe)
                    .image_path(uniqueFileName.toString())
                    .build();
            imageRecipeRepository.save(imageRecipe);

        }
        return "Lưu ảnh thành công!";
    }
    @Override
    public RecipeResponse getRecipeWithImages(int id) throws Exception {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Không tìm thấy Product Detail với id"));
        return toRecipeResponse(recipe);
    }

    public RecipeResponse toRecipeResponse(Recipe recipe) {
        List<ImageRecipe> imageRecipes = imageRecipeRepository.findByRecipe(recipe);
        List<Integer> status = imageRecipes.stream().map(ImageRecipe::getStatus).collect(Collectors.toList());
        List<String> imagePaths = imageRecipes.stream().map(ImageRecipe::getImage_path).collect(Collectors.toList());
        return RecipeResponse.fromRecipe(recipe, imagePaths, status);
    }
}

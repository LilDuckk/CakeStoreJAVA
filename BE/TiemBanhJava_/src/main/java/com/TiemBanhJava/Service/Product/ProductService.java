package com.TiemBanhJava.Service.Product;

import com.TiemBanhJava.DTO.ProductDTO;
import com.TiemBanhJava.Exeception.DataNotFoundException;
import com.TiemBanhJava.Models.Category;
import com.TiemBanhJava.Models.Product;
import com.TiemBanhJava.Repository.CategoryRepository;
import com.TiemBanhJava.Repository.ProductRepository;
import com.TiemBanhJava.Response.Product.ProductResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @Override
    @Transactional
    public Product create(ProductDTO productDTO) throws Exception {
        Category category = categoryRepository.findById(productDTO.getCategoryID()).orElseThrow(() -> new DataNotFoundException("Không tìm tấy category với id"));
        if (category.isDelete() == false) {
            Product product = Product.builder()
                    .category(category)
                    .name(productDTO.getName())
                    .thumbnail(insertThumbnail(productDTO.getThumbnail()))
                    .build();
            return productRepository.save(product);
        } else {
            System.out.println("Category đã bị xóa");
            return null;
        }
    }

    @Override
    public Product getbyID(int id) throws Exception {
        return productRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thấy Product với id" + id));
    }

    @Override
    @Transactional
    public Product update(int id, ProductDTO productDTO) throws Exception {
        Product product = productRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thấy Product với id" + id));
        Category category = categoryRepository.findById(productDTO.getCategoryID()).orElseThrow(() -> new DataNotFoundException("Không tìm tấy category với id"));
        if (category.isDelete() == false) {
            product.setCategory(category);
            product.setName(productDTO.getName());
            if (productDTO.getThumbnail() != null && !productDTO.getThumbnail().isEmpty()) {
                product.setThumbnail(insertThumbnail(productDTO.getThumbnail()));
            }else {
                product.setThumbnail(product.getThumbnail());
            }
            return productRepository.saveAndFlush(product);
        } else {
            System.out.println("Category đã bị xóa");
            return null;
        }


    }

    @Override
    public void delete(int id) throws Exception {
        Product product = productRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm tấy product với id" + id));
        if (product != null) {
            product.setDelete(true);
            productRepository.saveAndFlush(product);
        }
    }

    @Override
    public Page<ProductResponse> getList(PageRequest pageRequest) {
        return productRepository.findAll(pageRequest).map(product -> ProductResponse.fromProduct(product));
    }

    private String insertThumbnail(MultipartFile file) throws DataNotFoundException, IOException {
        if (file != null) {
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
            return uniqueFileName;
        }
        return null;
    }
}


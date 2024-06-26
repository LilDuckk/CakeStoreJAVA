package com.TiemBanhJava.Service.Product;

import com.TiemBanhJava.DTO.ImageProductDTO;
import com.TiemBanhJava.DTO.ProductDetailDTO;
import com.TiemBanhJava.Exeception.DataNotFoundException;
import com.TiemBanhJava.Models.ImageProduct;
import com.TiemBanhJava.Models.Product;
import com.TiemBanhJava.Models.ProductDetail;
import com.TiemBanhJava.Repository.ImageProductRepository;
import com.TiemBanhJava.Repository.ProductDetailRepository;
import com.TiemBanhJava.Repository.ProductRepository;
import com.TiemBanhJava.Response.Product.ProductDetailResponse;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
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
public class ProductDetailService implements  IProductDetailService{
    private final ProductRepository productRepository;
    private final ProductDetailRepository productDetailRepository;
    private final ImageProductRepository imageProductRepository;


    @Override
    @Transactional
    public ProductDetail create(ProductDetailDTO productDetailDTO) throws Exception {
        Product product = productRepository.findById(productDetailDTO.getProductID()).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product với id"));
        if(product.isDelete() != true) {
            ProductDetail productDetail = ProductDetail.builder()
                    .product(product)
                    .weight(productDetailDTO.getWeight())
                    .description(productDetailDTO.getDescription())
                    .build();
            productDetail.setDelete(false);
           return productDetailRepository.save(productDetail);
        }else {
            return null;
        }
    }

    @Override
    public ProductDetail getbyID(int id) throws Exception {
        return productDetailRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product Detail với id"));
    }

    @Override
    @Transactional
    public ProductDetail update(int id, ProductDetailDTO productDetailDTO) throws Exception {
        Product product = productRepository.findById(productDetailDTO.getProductID()).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product với id"));
        ProductDetail productDetail =  productDetailRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product Detail với id"));
        if(product.isDelete() != true) {
            productDetail.setProduct(product);
            productDetail.setWeight(productDetailDTO.getWeight());
            productDetail.setDescription(productDetailDTO.getDescription());
            return productDetailRepository.saveAndFlush(productDetail);
        }else {
            return null;
        }

    }

    @Override
    @Transactional
    public String saveImage(int productID, ImageProductDTO imageProductDTO) throws Exception {
        List<MultipartFile> files = imageProductDTO.getImage_path();
        files = files == null ? new ArrayList<MultipartFile>() :files;
        for(MultipartFile file : files){
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

            ProductDetail product = productDetailRepository.findById(productID).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product Detail với id"));
            ImageProduct imageProduct = ImageProduct.builder()
                    .productDetail(product)
                    .image_path(uniqueFileName.toString())
                    .build();
            imageProductRepository.save(imageProduct);

        }
        return "Lưu ảnh thành công!";


    }

    @Override
    public void delete(int id) throws Exception {
        ProductDetail productDetail = productDetailRepository.findById(id).orElseThrow(()-> new DataNotFoundException("Không tìm thấy Product Detail với id"));
        if(productDetail != null) {
            productDetail.setDelete(true);
            productDetailRepository.saveAndFlush(productDetail);
        }
    }
    @Override
    public ProductDetailResponse getProductDetailWithImages(int productDetailID) throws Exception {
        ProductDetail productDetail = productDetailRepository.findById(productDetailID)
                .orElseThrow(() -> new DataNotFoundException("Không tìm thấy Product Detail với id"));
        return toProductDetailResponse(productDetail);
    }

    @Override
    public Page<ProductDetailResponse> getList(PageRequest pageRequest) {
        return productDetailRepository.findAll(pageRequest).map(this::toProductDetailResponse);
    }

    private ProductDetailResponse toProductDetailResponse(ProductDetail productDetail) {
        List<ImageProduct> imageProducts = imageProductRepository.findByProductDetail(productDetail);
        List<String> imagePaths = imageProducts.stream().map(ImageProduct::getImage_path).collect(Collectors.toList());
        return ProductDetailResponse.fromProductDetail(productDetail, imagePaths);
    }

}

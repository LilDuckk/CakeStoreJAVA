package com.TiemBanhJava.Service.Product;

import com.TiemBanhJava.DTO.ImageProductDTO;
import com.TiemBanhJava.DTO.ProductDTO;
import com.TiemBanhJava.DTO.ProductDetailDTO;
import com.TiemBanhJava.Models.Product;
import com.TiemBanhJava.Models.ProductDetail;
import com.TiemBanhJava.Response.Product.ProductDetailResponse;
import com.TiemBanhJava.Response.Product.ProductResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IProductDetailService {
    ProductDetail create(ProductDetailDTO productDetailDTO) throws Exception;
    ProductDetail getbyID(int id) throws Exception;

    ProductDetail update(int id, ProductDetailDTO productDetailDTO) throws Exception;

    String saveImage(int productID, ImageProductDTO imageProductDTO) throws  Exception;
    void delete(int id) throws Exception;
    ProductDetailResponse getProductDetailWithImages(int productDetailID) throws Exception;
    Page<ProductDetailResponse> getList(PageRequest pageRequest);
}

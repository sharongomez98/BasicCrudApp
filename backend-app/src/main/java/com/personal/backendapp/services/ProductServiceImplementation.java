/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.personal.backendapp.services;

import com.personal.backendapp.models.Product;
import com.personal.backendapp.repositories.ProductRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author sharon98
 */
@Service
public class ProductServiceImplementation implements ProductService{

    @Autowired
    public ProductRepository productRepository;

    @Override
    @Transactional(readOnly = true)
    public ArrayList<Product> getProducts() {
        return (ArrayList<Product>) productRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    @Transactional
    public Product updateProduct(Integer id, Product product) {
        return productRepository.findById(id)
                .map(oldProduct -> {
                    oldProduct.setDescription(product.getDescription());
                    oldProduct.setMount(product.getMount());
                    oldProduct.setDistributor_id(product.getDistributor_id());
                    return productRepository.save(oldProduct);
                }).orElseGet(() -> { return product;});
    }

    @Override
    @Transactional
    public void removeProduct(Integer id) {
        Product product = productRepository.getById(id);
        productRepository.delete(product);
    }

}

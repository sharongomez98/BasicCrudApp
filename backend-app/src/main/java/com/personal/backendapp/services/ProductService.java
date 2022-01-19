/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.personal.backendapp.services;

import com.personal.backendapp.models.Product;
import java.util.ArrayList;

/**
 *
 * @author sharon98
 */
public interface ProductService {

    public ArrayList<Product> getProducts();

    public Product getProductById(Integer id);

    public Product addProduct(Product product);

    public Product updateProduct(Integer id, Product product);

    public void removeProduct(Integer id);

}

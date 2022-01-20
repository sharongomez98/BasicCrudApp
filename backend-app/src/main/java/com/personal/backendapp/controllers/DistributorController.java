/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.personal.backendapp.controllers;

import com.personal.backendapp.models.Distributor;
import com.personal.backendapp.services.DistributorService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author sharon98
 */
@RestController
@RequestMapping(value = "/api/distributor")
public class DistributorController {

    @Autowired
    public DistributorService distributorService;

    @GetMapping("/")
    List<Distributor> getDistributors() {
        return distributorService.getDistributors();
    }

    @GetMapping("/{id}")
    Distributor getDistributorById(@PathVariable Integer id) {
        return distributorService.getDistributorById(id);
    }

    @PostMapping("/")
    Distributor addDistributor(@RequestBody Distributor distributor) {
        return distributorService.addDistributor(distributor);
    }

    @PutMapping("/{id}")
    Distributor updateDistributor(@PathVariable Integer id, @RequestBody Distributor distributor) {
        return distributorService.updateDistributor(id, distributor);
    }

    @DeleteMapping("/{id}")
    void removeDistributor(@PathVariable Integer id) {
        distributorService.removeDistributor(id);
    }

}

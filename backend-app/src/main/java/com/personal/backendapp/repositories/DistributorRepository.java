/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.personal.backendapp.repositories;

import com.personal.backendapp.models.Distributor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author sharon98
 */
@Repository
public interface DistributorRepository extends JpaRepository<Distributor, Integer>{

}

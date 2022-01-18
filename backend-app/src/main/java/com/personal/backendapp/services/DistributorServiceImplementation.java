/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.personal.backendapp.services;

import com.personal.backendapp.models.Distributor;
import com.personal.backendapp.repositories.DistributorRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author sharon98
 */
@Service
public class DistributorServiceImplementation implements DistributorService {

    @Autowired
    public DistributorRepository distributorRepository;

    @Override
    @Transactional(readOnly = true)
    public ArrayList<Distributor> getDistributors() {
        return (ArrayList<Distributor>) distributorRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Distributor getDistributorById(Integer id) {
        return distributorRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Distributor addDistributor(Distributor distributor) {
        return distributorRepository.save(distributor);
    }

    @Override
    @Transactional
    public Distributor updateDistributor(Integer id, Distributor distributor) {
        return distributorRepository.findById(id)
                .map(oldDistributor -> {
                    oldDistributor.setName(distributor.getName());
                    oldDistributor.setNotificationEmail(distributor.getNotificationEmail());
                    oldDistributor.setAlertEmail(distributor.getAlertEmail());
                    return distributorRepository.save(oldDistributor);
                }).orElseGet(() -> {return distributor;});
    }

    @Override
    @Transactional
    public void removeDistributor(Integer id) {
        Distributor distributor = distributorRepository.getById(id);
        distributorRepository.delete(distributor);
    }

}

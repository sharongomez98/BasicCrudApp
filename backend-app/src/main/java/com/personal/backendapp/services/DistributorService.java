/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.personal.backendapp.services;

import com.personal.backendapp.models.Distributor;
import java.util.ArrayList;

/**
 *
 * @author sharon98
 */
public interface DistributorService {

    public ArrayList<Distributor> getDistributors();

    public Distributor getDistributorById(Integer id);

    public Distributor addDistributor(Distributor distributor);

    public Distributor updateDistributor(Integer id, Distributor distributor);

    public void removeDistributor(Integer id);
}

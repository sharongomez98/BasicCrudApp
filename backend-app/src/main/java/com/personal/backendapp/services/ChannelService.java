/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.personal.backendapp.services;

import com.personal.backendapp.models.Channel;
import java.util.ArrayList;

/**
 *
 * @author sharon98
 */
public interface ChannelService {

    public ArrayList<Channel> getChannels();

    public Channel getChannelById(Integer id);

    public Channel addChannel(Channel channel);

    public Channel updateChannel(Integer id, Channel channel);

    public void removeChannel(Integer id);
}

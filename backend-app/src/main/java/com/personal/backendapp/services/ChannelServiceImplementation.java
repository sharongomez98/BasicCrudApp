/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.personal.backendapp.services;

import com.personal.backendapp.models.Channel;
import com.personal.backendapp.repositories.ChannelRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author sharon98
 */
@Service
public class ChannelServiceImplementation implements ChannelService {

    @Autowired
    public ChannelRepository channelRepository;

    @Override
    @Transactional(readOnly = true)
    public ArrayList<Channel> getChannels() {
        return (ArrayList<Channel>) channelRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Channel getChannelById(Integer id) {
        return channelRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Channel addChannel(Channel channel) {
        return channelRepository.save(channel);
    }

    @Override
    @Transactional
    public Channel updateChannel(Integer id, Channel channel) {
        return channelRepository.findById(id)
                .map(oldChannel -> {
                    oldChannel.setName(channel.getName());
                    oldChannel.setDistributor_id(channel.getDistributor_id());
                    return channelRepository.save(oldChannel);
                }).orElseGet(() -> { return channel; });
    }

    @Override
    @Transactional
    public void removeChannel(Integer id) {
        Channel channel = channelRepository.getById(id);
        channelRepository.delete(channel);
    }

}

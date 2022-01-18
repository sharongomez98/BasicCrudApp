/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.personal.backendapp.controllers;

import com.personal.backendapp.models.Channel;
import com.personal.backendapp.services.ChannelService;
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
@RequestMapping(value = "/api/channel")
public class ChannelController {

    @Autowired
    public ChannelService channelService;

    @GetMapping("/")
    List<Channel> getChannels() {
        return channelService.getChannels();
    }

    @GetMapping("/{id}")
    Channel getChannelById(@PathVariable Integer id) {
        return channelService.getChannelById(id);
    }

    @PostMapping("/")
    Channel addChannel(@RequestBody Channel channel) {
        return channelService.addChannel(channel);
    }

    @PutMapping("/{id}")
    Channel updateChannel(@PathVariable Integer id, @RequestBody Channel channel) {
        return channelService.updateChannel(id, channel);
    }

    @DeleteMapping("/{id}")
    void removeChannel(@PathVariable Integer id) {
        channelService.removeChannel(id);
    }
}

import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/models/channel';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels: Channel[] = [];
  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    this.channelService.getChannels()
    .subscribe(response => this.channels = response);
  }

  removeChannel(id: number) {
    this.channelService.removeChannel(id)
    .subscribe(response => {
      console.log("Channel removed sucessfully.");
      this.channels = this.channels.filter(channel => channel.id != id);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distributor } from 'src/app/models/distributor';
import { Channel } from 'src/app/models/channel';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channels-form',
  templateUrl: './channels-form.component.html',
  styleUrls: ['./channels-form.component.css']
})
export class ChannelsFormComponent implements OnInit {

  channel: Channel = new Channel();

  distributors: Distributor[] = [];

  constructor(private channelService: ChannelService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.channelService.getDistributors()
    .subscribe(response => this.distributors = response);

    this.activatedRoute.params
    .subscribe(params => {
      let id: number = params['id'];
      if (id){
        this.channelService.getChannel(id)
        .subscribe(response => this.channel=response);
      }
    })
  }

  createChannel() {
    this.channelService.addChannel(this.channel)
    .subscribe(response => {
      console.log("channel created successfully.");
      this.router.navigate(['/channels']);
    });
  }

  updateChannel() {
    this.channelService.updateChannel(this.channel)
    .subscribe(response => {
      console.log("channel updated successfully.");
      this.router.navigate(['/channels']);
    });
  }

  compareDistributor(o1: Distributor, o2: Distributor): boolean {
    if (o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id == o2.id;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Distributor } from '../models/distributor';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  url: string = 'http://localhost:8080/api/';
  channel: string = 'channel/';
  distributor: string = 'distributor/';

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]>{
    return this.http.get<Channel[]>(this.url + this.channel);
  }

  getDistributors(): Observable<Distributor[]>{
    return this.http.get<Distributor[]>(this.url + this.distributor);
  }

  getChannel(id: number): Observable<Channel>{
    return this.http.get<Channel>(this.url + this.channel + id);
  }

  addChannel(channel: Channel): Observable<Channel>{
    return this.http.post<Channel>(this.url + this.channel, channel);
  }

  updateChannel(channel: Channel): Observable<Channel>{
    return this.http.put<Channel>(this.url + this.channel + channel.id, channel);
  }

  removeChannel(id: number): Observable<any>{
    return this.http.delete<any>(this.url + this.channel + id);
  }
}

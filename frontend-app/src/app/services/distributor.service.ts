import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Distributor } from '../models/distributor';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {

  url: string = 'http://localhost:8080/api/';
  distributor: string = 'distributor/';

  constructor(private http: HttpClient) { }

  getDistributors(): Observable<Distributor[]>{
    return this.http.get<Distributor[]>(this.url + this.distributor);
  }

  getDistributor(id: number): Observable<Distributor>{
    return this.http.get<Distributor>(this.url + this.distributor + id);
  }

  addDistributor(distributor: Distributor): Observable<Distributor>{
    return this.http.post<Distributor>(this.url + this.distributor, distributor);
  }

  updateDistributor(distributor: Distributor): Observable<Distributor>{
    return this.http.put<Distributor>(this.url + this.distributor + distributor.id, distributor);
  }

  removeDistributor(id: number): Observable<any>{
    return this.http.delete<any>(this.url + this.distributor + id);
  }
}

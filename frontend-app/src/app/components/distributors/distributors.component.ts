import { Component, OnInit } from '@angular/core';
import { Distributor } from 'src/app/models/distributor';
import { DistributorService } from 'src/app/services/distributor.service';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  distributors: Distributor[] = [];
  constructor(private distributorService: DistributorService) { }

  ngOnInit(): void {
    this.distributorService.getDistributors()
    .subscribe(response => this.distributors = response);
  }

  removeDistributor(id: number) {
    this.distributorService.removeDistributor(id)
    .subscribe(response => {
      console.log("Distributor removed sucessfully.");
      this.distributors = this.distributors.filter(distributor => distributor.id != id);
    })
  }

}

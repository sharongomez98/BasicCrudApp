import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distributor } from 'src/app/models/distributor';
import { DistributorService } from 'src/app/services/distributor.service';

@Component({
  selector: 'app-distributors-form',
  templateUrl: './distributors-form.component.html',
  styleUrls: ['./distributors-form.component.css']
})
export class DistributorsFormComponent implements OnInit {

  distributor: Distributor = new Distributor();


  constructor(private distributorService: DistributorService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params => {
      let id: number = params['id'];
      if (id){
        this.distributorService.getDistributor(id)
        .subscribe(response => this.distributor=response);
      }
    })
  }

  createDistributor() {
    this.distributorService.addDistributor(this.distributor)
    .subscribe(response => {
      console.log("Distributor created successfully.");
      this.router.navigate(['/distributors']);
    });
  }

  updateDistributor() {
    this.distributorService.updateDistributor(this.distributor)
    .subscribe(response => {
      console.log("Distributor updated successfully.");
      this.router.navigate(['/distributors']);
    });
  }

}

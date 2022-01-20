import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsComponent } from './components/products/products.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { ChannelsFormComponent } from './components/channels-form/channels-form.component';
import { DistributorsComponent } from './components/distributors/distributors.component';
import { DistributorsFormComponent } from './components/distributors-form/distributors-form.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'distributors', component: DistributorsComponent},
  {path: 'distributors/distributor', component: DistributorsFormComponent},
  {path: 'distributors/distributor/:id', component: DistributorsFormComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/product', component: ProductsFormComponent},
  {path: 'products/product/:id', component: ProductsFormComponent},
  {path: 'channels', component: ChannelsComponent},
  {path: 'channels/channel', component: ChannelsFormComponent},
  {path: 'channels/channel/:id', component: ChannelsFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

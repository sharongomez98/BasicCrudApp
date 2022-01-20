import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { ChannelsFormComponent } from './components/channels-form/channels-form.component';
import { DistributorsComponent } from './components/distributors/distributors.component';
import { DistributorsFormComponent } from './components/distributors-form/distributors-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductsFormComponent,
    IndexComponent,
    ChannelsComponent,
    ChannelsFormComponent,
    DistributorsComponent,
    DistributorsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

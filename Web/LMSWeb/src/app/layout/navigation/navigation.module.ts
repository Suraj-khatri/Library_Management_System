import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from './navigation.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from '../../not-found/not-found.component';
import { CustomerModule } from 'src/app/customer/customer.module';

const routes: Routes = [
  { path: '', component: NavigationComponent }
];

@NgModule({
  declarations: [
    NavigationComponent,
    DashboardComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    NavigationRoutingModule,
    CustomerModule
  ],
  providers: [NavigationService]

})
export class NavigationModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HeaderNavbarModule} from '../../shared/components/header-navbar/header-navbar.module';
import {RoadMapPageComponent} from './road-map-page.component';


@NgModule({
  declarations: [RoadMapPageComponent],
  exports: [
    RoadMapPageComponent
  ],
  imports: [
    CommonModule,
    HeaderNavbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class RoadMapPageModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HeaderNavbarModule} from '../../shared/components/header-navbar/header-navbar.module';
import { FoundersPageComponent } from './founders-page.component';


@NgModule({
  declarations: [
    FoundersPageComponent
  ],
  imports: [
    CommonModule,
    HeaderNavbarModule
  ]
})
export class FoundersPageModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {BasedPageComponent} from './based-page.component';
import {HeaderNavbarModule} from "../../shared/components/header-navbar/header-navbar.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [BasedPageComponent],
  exports: [
    BasedPageComponent
  ],
  imports: [
    CommonModule,
    HeaderNavbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class BasedPageModule { }

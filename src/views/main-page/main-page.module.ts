import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {IconsModule} from '../../core/icons/icons.module';
import {MainPageComponent} from './main-page.component';
import {HeaderNavbarModule} from "../../shared/components/header-navbar/header-navbar.module";
import {BasedPageModule} from "../based-page/based-page.module";


@NgModule({
  declarations: [
	MainPageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    IconsModule,
    HeaderNavbarModule,
    BasedPageModule
  ],
  exports: [

  ],
})
export class MainPageModule {

}

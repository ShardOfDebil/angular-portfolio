import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {IconsModule} from '../../core/icons/icons.module';
import {HeaderNavbarModule} from '../../shared/components/header-navbar/header-navbar.module';
import {RoadMapPageModule} from '../road-map-page/road-map-page.module';
import {MainPageComponent} from './main-page.component';


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
    RoadMapPageModule
  ],
  exports: [

  ],
})
export class MainPageModule {

}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {IconsModule} from '../../core/icons/icons.module';
import {HeaderNavbarModule} from '../../shared/components/header-navbar/header-navbar.module';
import {FoundersPageModule} from '../founders-page/founders-page.module';
import {RoadMapPageModule} from '../road-map-page/road-map-page.module';
import {MainPageComponent} from './main-page.component';


@NgModule({
  declarations: [
	MainPageComponent
  ],
  imports: [
    CommonModule,
    HeaderNavbarModule,
    RoadMapPageModule,
    FoundersPageModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    IconsModule,
  ],
  exports: [

  ],
})
export class MainPageModule {

}

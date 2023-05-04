import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FoundersPageComponent} from './founders-page.component';


@NgModule({
  declarations: [FoundersPageComponent],
  exports: [
    FoundersPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class FoundersPageModule { }

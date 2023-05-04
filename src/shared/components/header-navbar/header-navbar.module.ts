import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {HeaderNavbarComponent} from './header-navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { LogoNamespaceComponent } from './logo-namespace/logo-namespace.component';


@NgModule({
  declarations: [HeaderNavbarComponent, LogoNamespaceComponent],
  exports: [
    HeaderNavbarComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ]
})
export class HeaderNavbarModule { }

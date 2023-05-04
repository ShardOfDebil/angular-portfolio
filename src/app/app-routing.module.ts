import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationPageComponent} from '../views/authorization-page/authorization-page.component';
import {MainPageComponent} from '../views/main-page/main-page.component';
import {RoadMapPageComponent} from '../views/road-map-page/road-map-page.component';
import {AppComponent} from './app.component';

const appRoute: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'roadmap',
    component: RoadMapPageComponent
  },
  {
    path: 'authorization',
    component: AuthorizationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {initialNavigation: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

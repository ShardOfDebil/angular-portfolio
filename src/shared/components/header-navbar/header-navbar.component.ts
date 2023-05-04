import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTE_PATH} from '../../../core/const/routes.enum';
import {Observable} from "rxjs";

export interface IPages {
  name: string;
  route: ROUTE_PATH;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavbarComponent implements OnInit {

  public pagesArr: IPages[] = [
    {
      name: 'ABOUT',
      route: ROUTE_PATH.EMPTY,
    },
    {
      name: 'ROAD MAP',
      route: ROUTE_PATH.ROADMAP_PAGE,
    },
    {
      name: 'FOUNDERS',
      route: ROUTE_PATH.FOUNDERS_PAGE,
    },
    {
      name: 'PRE ORDER',
      route: ROUTE_PATH.GRAPHICS_PAGE,
    }
  ];
  public preloader: boolean = false;

  constructor(
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
  }

  public navigateTo(route: ROUTE_PATH): void {
    this.router.navigate([route]).then((r: boolean) => {
    });
  }

}

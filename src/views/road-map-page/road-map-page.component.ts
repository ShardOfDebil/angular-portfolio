import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-based-page',
  templateUrl: './road-map-page.component.html',
  styleUrls: ['./road-map-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadMapPageComponent implements OnInit {

  public isOpen: boolean = false;

  constructor() {
  }

  public ngOnInit(): void {
  }

}

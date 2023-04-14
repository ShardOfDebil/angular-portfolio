import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-based-page',
  templateUrl: './based-page.component.html',
  styleUrls: ['./based-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasedPageComponent implements OnInit {

  public isOpen: boolean = false;

  constructor() {
  }

  public ngOnInit(): void {
  }

}

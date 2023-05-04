import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo-namespace',
  templateUrl: './logo-namespace.component.html',
  styleUrls: ['./logo-namespace.component.scss']
})
export class LogoNamespaceComponent implements OnInit {

  public letter: string = 'A';

  public word: string = 'urora';

  public wordStyles: {} = {};

  constructor() {
  }

  public ngOnInit(): void {
  }


  public onMouseEnter(): void {
    this.wordStyles = {
      opacity: 1,
      transform: 'translateX(0%)'
    };
  }

  public onMouseLeave(): void {
    this.wordStyles = {
      opacity: 0,
      transform: 'translateX(100%)'
    };
  }
}

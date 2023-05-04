import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNamespaceComponent } from './logo-namespace.component';

describe('LogoNamespaceComponent', () => {
  let component: LogoNamespaceComponent;
  let fixture: ComponentFixture<LogoNamespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoNamespaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoNamespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

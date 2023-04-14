import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedPageComponent } from './based-page.component';

describe('BasedPageComponent', () => {
  let component: BasedPageComponent;
  let fixture: ComponentFixture<BasedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

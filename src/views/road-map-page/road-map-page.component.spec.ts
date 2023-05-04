import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadMapPageComponent } from './road-map-page.component';

describe('BasedPageComponent', () => {
  let component: RoadMapPageComponent;
  let fixture: ComponentFixture<RoadMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadMapPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

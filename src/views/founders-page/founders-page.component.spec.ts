import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersPageComponent } from './founders-page.component';

describe('FoundersPageComponent', () => {
  let component: FoundersPageComponent;
  let fixture: ComponentFixture<FoundersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

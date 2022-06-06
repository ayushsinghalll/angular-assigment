import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrangingAlertComponent } from './wranging-alert.component';

describe('WrangingAlertComponent', () => {
  let component: WrangingAlertComponent;
  let fixture: ComponentFixture<WrangingAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrangingAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrangingAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

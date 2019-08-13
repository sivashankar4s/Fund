import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyFundPage } from './emergency-fund.page';

describe('EmergencyFundPage', () => {
  let component: EmergencyFundPage;
  let fixture: ComponentFixture<EmergencyFundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyFundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyFundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

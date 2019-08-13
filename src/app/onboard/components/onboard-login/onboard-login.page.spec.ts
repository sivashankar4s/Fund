import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardLoginPage } from './onboard-login.page';

describe('OnboardLoginPage', () => {
  let component: OnboardLoginPage;
  let fixture: ComponentFixture<OnboardLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

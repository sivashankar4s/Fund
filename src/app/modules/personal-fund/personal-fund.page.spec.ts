import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFundPage } from './personal-fund.page';

describe('PersonalFundPage', () => {
  let component: PersonalFundPage;
  let fixture: ComponentFixture<PersonalFundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalFundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalFundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

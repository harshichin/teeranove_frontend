import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticPartnerComponent } from './logistic-partner.component';

describe('LogisticPartnerComponent', () => {
  let component: LogisticPartnerComponent;
  let fixture: ComponentFixture<LogisticPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

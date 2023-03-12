import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCentersComponent } from './collection-centers.component';

describe('CollectionCentersComponent', () => {
  let component: CollectionCentersComponent;
  let fixture: ComponentFixture<CollectionCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

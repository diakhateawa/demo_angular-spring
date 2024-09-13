import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPaiementsComponent } from './load-paiements.component';

describe('LoadPaiementsComponent', () => {
  let component: LoadPaiementsComponent;
  let fixture: ComponentFixture<LoadPaiementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadPaiementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadPaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

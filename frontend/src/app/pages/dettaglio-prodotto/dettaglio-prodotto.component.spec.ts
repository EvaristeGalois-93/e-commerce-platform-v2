import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioProdottoComponent } from './dettaglio-prodotto.component';

describe('DettaglioProdottoComponent', () => {
  let component: DettaglioProdottoComponent;
  let fixture: ComponentFixture<DettaglioProdottoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioProdottoComponent]
    });
    fixture = TestBed.createComponent(DettaglioProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

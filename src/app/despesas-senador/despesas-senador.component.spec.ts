import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasSenadorComponent } from './despesas-senador.component';

describe('DespesasSenadorComponent', () => {
  let component: DespesasSenadorComponent;
  let fixture: ComponentFixture<DespesasSenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesasSenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesasSenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

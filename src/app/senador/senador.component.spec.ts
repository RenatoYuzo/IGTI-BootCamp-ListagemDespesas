import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenadorComponent } from './senador.component';

describe('SenadorComponent', () => {
  let component: SenadorComponent;
  let fixture: ComponentFixture<SenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

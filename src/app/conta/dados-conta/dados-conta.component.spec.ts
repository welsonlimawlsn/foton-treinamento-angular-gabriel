import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosContaComponent } from './dados-conta.component';

describe('DadosContaComponent', () => {
  let component: DadosContaComponent;
  let fixture: ComponentFixture<DadosContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

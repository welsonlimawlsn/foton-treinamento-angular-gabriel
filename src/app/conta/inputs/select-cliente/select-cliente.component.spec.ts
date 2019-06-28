import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClienteComponent } from './select-cliente.component';

describe('SelectClienteComponent', () => {
  let component: SelectClienteComponent;
  let fixture: ComponentFixture<SelectClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

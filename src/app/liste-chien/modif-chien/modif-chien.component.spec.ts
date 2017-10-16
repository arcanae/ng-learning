import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifChienComponent } from './modif-chien.component';

describe('ModifChienComponent', () => {
  let component: ModifChienComponent;
  let fixture: ComponentFixture<ModifChienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifChienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

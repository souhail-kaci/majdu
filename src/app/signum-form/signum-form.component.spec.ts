import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignumFormComponent } from './signum-form.component';

describe('SignumFormComponent', () => {
  let component: SignumFormComponent;
  let fixture: ComponentFixture<SignumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

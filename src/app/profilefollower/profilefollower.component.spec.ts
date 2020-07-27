import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilefollowerComponent } from './profilefollower.component';

describe('ProfilefollowerComponent', () => {
  let component: ProfilefollowerComponent;
  let fixture: ComponentFixture<ProfilefollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilefollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilefollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

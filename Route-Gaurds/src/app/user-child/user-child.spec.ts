import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChild } from './user-child';

describe('UserChild', () => {
  let component: UserChild;
  let fixture: ComponentFixture<UserChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

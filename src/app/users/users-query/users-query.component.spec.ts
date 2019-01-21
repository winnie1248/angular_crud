import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersQueryComponent } from './users-query.component';

describe('UsersQueryComponent', () => {
  let component: UsersQueryComponent;
  let fixture: ComponentFixture<UsersQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

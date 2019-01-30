import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCustomersComponent } from './sidenav-customers.component';

describe('SidenavCustomersComponent', () => {
  let component: SidenavCustomersComponent;
  let fixture: ComponentFixture<SidenavCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

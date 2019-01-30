import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSupportComponent } from './sidenav-support.component';

describe('SidenavSupportComponent', () => {
  let component: SidenavSupportComponent;
  let fixture: ComponentFixture<SidenavSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

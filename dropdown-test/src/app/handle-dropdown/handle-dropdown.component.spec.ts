import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleDropdownComponent } from './handle-dropdown.component';

describe('HandleDropdownComponent', () => {
  let component: HandleDropdownComponent;
  let fixture: ComponentFixture<HandleDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ngformComponent } from './ngform.component';

describe('ngformComponent', () => {
  let component: ngformComponent;
  let fixture: ComponentFixture<ngformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ngformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ngformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

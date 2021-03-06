import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateButtonComponent } from './create-button.component';

describe('CreateButtonComponent', () => {
  let component: CreateButtonComponent;
  let fixture: ComponentFixture<CreateButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

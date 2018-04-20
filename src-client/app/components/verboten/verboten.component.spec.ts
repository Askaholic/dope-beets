import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbotenComponent } from './verboten.component';

describe('VerbotenComponent', () => {
  let component: VerbotenComponent;
  let fixture: ComponentFixture<VerbotenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbotenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbotenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

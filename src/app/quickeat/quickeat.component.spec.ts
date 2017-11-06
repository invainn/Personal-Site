import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickeatComponent } from './quickeat.component';

describe('QuickeatComponent', () => {
  let component: QuickeatComponent;
  let fixture: ComponentFixture<QuickeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

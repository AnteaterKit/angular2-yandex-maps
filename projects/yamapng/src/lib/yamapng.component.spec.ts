import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamapngComponent } from './yamapng.component';

describe('YamapngComponent', () => {
  let component: YamapngComponent;
  let fixture: ComponentFixture<YamapngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamapngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamapngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

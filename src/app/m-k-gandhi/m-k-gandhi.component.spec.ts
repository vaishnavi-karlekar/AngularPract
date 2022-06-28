import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MKGandhiComponent } from './m-k-gandhi.component';

describe('MKGandhiComponent', () => {
  let component: MKGandhiComponent;
  let fixture: ComponentFixture<MKGandhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MKGandhiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MKGandhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

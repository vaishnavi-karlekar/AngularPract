import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanaComponent } from './nana.component';

describe('NanaComponent', () => {
  let component: NanaComponent;
  let fixture: ComponentFixture<NanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

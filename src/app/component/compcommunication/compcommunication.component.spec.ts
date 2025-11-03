import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompcommunicationComponent } from './compcommunication.component';

describe('CompcommunicationComponent', () => {
  let component: CompcommunicationComponent;
  let fixture: ComponentFixture<CompcommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompcommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompcommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

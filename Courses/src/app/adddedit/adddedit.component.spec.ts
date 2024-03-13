import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeditComponent } from './adddedit.component';

describe('AdddeditComponent', () => {
  let component: AdddeditComponent;
  let fixture: ComponentFixture<AdddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdddeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

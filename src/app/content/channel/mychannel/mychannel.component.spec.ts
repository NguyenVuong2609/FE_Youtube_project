import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychannelComponent } from './mychannel.component';

describe('MychannelComponent', () => {
  let component: MychannelComponent;
  let fixture: ComponentFixture<MychannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MychannelComponent]
    });
    fixture = TestBed.createComponent(MychannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

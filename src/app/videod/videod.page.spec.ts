import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideodPage } from './videod.page';

describe('VideodPage', () => {
  let component: VideodPage;
  let fixture: ComponentFixture<VideodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

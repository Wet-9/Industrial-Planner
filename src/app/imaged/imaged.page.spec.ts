import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagedPage } from './imaged.page';

describe('ImagedPage', () => {
  let component: ImagedPage;
  let fixture: ComponentFixture<ImagedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImagedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

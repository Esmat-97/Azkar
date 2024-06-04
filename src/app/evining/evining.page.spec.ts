import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EviningPage } from './evining.page';

describe('EviningPage', () => {
  let component: EviningPage;
  let fixture: ComponentFixture<EviningPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EviningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

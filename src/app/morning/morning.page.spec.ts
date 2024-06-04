import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MorningPage } from './morning.page';

describe('MorningPage', () => {
  let component: MorningPage;
  let fixture: ComponentFixture<MorningPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MorningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { add } from './calculator';

import { AppComponent } from './app.component';

describe('AppComponent', () => {


  let component=new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });



  it('show alert msg', () => {
   
    expect(component.showAlert('esmat')).toBe('esmat');
  });

  it('show equality', () => {
    var a=5;
    var b=5;
    expect(a).toBe(b);
  });


  it('show false', () => {
    var a=false;
    expect(a).toBeFalse();
  });


  it('show true', () => {
    var a=true;
    expect(a).toBeTrue();
  });


  it('show addition', () => {
    expect(add(15,15)).toBe(30);
  });

});

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { fakeAsync } from "@angular/core/testing";
import { tick } from "@angular/core/testing";
import { ReversePipe } from "app/reverse.pipe";

describe('AppComponent', () => {

  it('should create the app', (() => {
    let reversePipe = new ReversePipe;
    expect(reversePipe.transform('hello')).toEqual('olleh');
  }));

 

});

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {LazyElementsModule} from '@angular-extensions/elements';

@NgModule({
  imports:      [ BrowserModule, FormsModule, LazyElementsModule ],
  declarations: [ AppComponent, HelloComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(private zone: NgZone) {
    (window as any).ngZone = this.zone;
  }
}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet }  from '@angular/router';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, RouterOutlet, GcdsComponentsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

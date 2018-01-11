import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PanelsComponent } from './components/panels/panels.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { MenusComponent } from './components/menus/menus.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    OverlayComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

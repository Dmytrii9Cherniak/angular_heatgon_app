import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HexagonMapComponent } from './components/hexagon-map/hexagon-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonMapComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

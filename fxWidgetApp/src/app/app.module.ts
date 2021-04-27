import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FxwidgetModule } from './modules/fxwidget/fxwidget.module';
import { FxService } from './services/fx.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FxwidgetModule,
    HttpClientModule,
  ],
  providers: [FxService],
  bootstrap: [AppComponent]
})
export class AppModule { }

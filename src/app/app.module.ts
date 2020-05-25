import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { providers } from './app.providers';
import { AuthGuard } from './guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import { reducers , metaReducers} from 'src/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/store/effects/auth.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AuthEffects]),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [...providers, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

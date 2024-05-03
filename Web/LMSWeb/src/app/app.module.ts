import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './layout/navigation/navigation.module';
import { AuthModule } from './layout/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BookModule } from './book/book.module';
import { GameComponent } from './game/game.component';
import { DashboardComponent } from './layout/navigation/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,
    NavigationModule,
    AuthModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

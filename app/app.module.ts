import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeoptsComponent } from './welcomeopts/welcomeopts.component';

import { TrendingmoviesComponent } from './trendingmovies/trendingmovies.component';
import { UpcomingmoviesComponent } from './upcomingmovies/upcomingmovies.component';
import { MyfavmoviesComponent } from './myfavmovies/myfavmovies.component';
import { HeaderComponent } from './header/header.component';
import { Bestof2022Component } from './bestof2022/bestof2022.component';
import { SeconderheaderComponent } from './seconderheader/seconderheader.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WelcomeoptsComponent,
    TrendingmoviesComponent,
    UpcomingmoviesComponent,
    MyfavmoviesComponent,
    HeaderComponent,
    Bestof2022Component,
    SeconderheaderComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

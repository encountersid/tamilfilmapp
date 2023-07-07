import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { TrendingfilmsComponent } from './trendingfilms/trendingfilms.component';
import { UpcomingfilmsComponent } from './upcomingfilms/upcomingfilms.component';
import { MyfavoritefilmsComponent } from './myfavoritefilms/myfavoritefilms.component';
import { Bestof2022filmsComponent } from './bestof2022films/bestof2022films.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WelcomepageComponent,
    TrendingfilmsComponent,
    UpcomingfilmsComponent,
    MyfavoritefilmsComponent,
    Bestof2022filmsComponent,
    HeadernavComponent,
    MainheaderComponent,
    MovieComponent,
   
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

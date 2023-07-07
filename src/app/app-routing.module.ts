import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bestof2022filmsComponent } from './bestof2022films/bestof2022films.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyfavoritefilmsComponent } from './myfavoritefilms/myfavoritefilms.component';
import { TrendingfilmsComponent } from './trendingfilms/trendingfilms.component';
import { UpcomingfilmsComponent } from './upcomingfilms/upcomingfilms.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'home',component:HomeComponent},
  { path:'login',component:LoginComponent},
  { path:'welcomepage',component:WelcomepageComponent},
  {path:'trendingfilms',component:TrendingfilmsComponent},
  {path:'upcomingfilms',component:UpcomingfilmsComponent},
  {path:'myfavoritefilms',component:MyfavoritefilmsComponent},
  {path:'bestof2022films',component:Bestof2022filmsComponent},
  {path:'movie',component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

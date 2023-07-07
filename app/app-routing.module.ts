import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TrendingmoviesComponent } from './trendingmovies/trendingmovies.component';
import { WelcomeoptsComponent } from './welcomeopts/welcomeopts.component';
import { UpcomingmoviesComponent } from './upcomingmovies/upcomingmovies.component';
import { MyfavmoviesComponent } from './myfavmovies/myfavmovies.component';
import { HomeComponent } from './home/home.component';
import { Bestof2022Component } from './bestof2022/bestof2022.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'welcomeopts',component:WelcomeoptsComponent},
  {path:'trendingmovies',component:TrendingmoviesComponent},
  {path:'upcomingmovies',component:UpcomingmoviesComponent},
  {path:'myfavmovies',component:MyfavmoviesComponent},
  {path:'bestof2022',component:Bestof2022Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

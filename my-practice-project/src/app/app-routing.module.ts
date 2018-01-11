import { AuthChildGuard } from './guards/auth-child.guard';

import { UnauthorisedComponent } from './components/errors/unauthorised/unauthorised.component';
// import { AuthGuard } from './guards/auth.guard';
import { DetailsComponent } from './components/main/user-detail/details/details.component';
import { TrackOrderComponent } from './components/main/user-detail/track-order/track-order.component';
import { OrdersComponent } from './components/main/user-detail/orders/orders.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/errors/page-not-found/page-not-found.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgetPasswordComponent } from "./components/forget-password/forget-password.component";
import { RegisterComponent } from "./components/register/register.component";
import { MainComponent } from "./components/main/main.component";
import { DashboardComponent } from "./components/main/dashboard/dashboard.component";
import { UserDetailComponent } from "./components/main/user-detail/user-detail.component";
import { ChangePasswordComponent } from './components/main/user-detail/change-password/change-password.component';
import { CartComponent } from "./components/main/user-detail/cart/cart.component";

const routes: Routes = [
  { path:'about', component: AboutComponent },
  { path:'main', 
    component: MainComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthChildGuard],
    children: [
      { path: 'dashboard',
        component: DashboardComponent },
      { path: 'user', 
        component: UserDetailComponent,
          children: [
          { path: 'change-password', component: ChangePasswordComponent },
          { path: 'cart', component: CartComponent },
          { path: 'orders', component: OrdersComponent },
          { path: 'track-order', component: TrackOrderComponent },
          { path: 'details', component: DetailsComponent },
          { path: '', redirectTo : 'details', pathMatch: 'full' }
        ] 
      },
      { path: '', redirectTo : 'dashboard', pathMatch: 'full' }
    ] 
  },
  { path:'forget-password', component: ForgetPasswordComponent },
  { path:'home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'unauthorised', component: UnauthorisedComponent },
  { path:'lazy', loadChildren: './lazy.module#LazyModule' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

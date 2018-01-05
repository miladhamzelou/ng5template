import { FormValidationsService } from './services/form-validations.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { UnauthorisedComponent } from './components/errors/unauthorised/unauthorised.component';

import { AuthGuard } from './guards/auth.guard';

import { HomeService } from './services/home.service';
import { UserService } from './services/user.service';
import { AboutComponent } from './components/about/about.component';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FormErrorsComponent } from './components/forms/form-errors.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { UserDetailComponent } from './components/main/user-detail/user-detail.component';
import { CartComponent } from './components/main/user-detail/cart/cart.component';
import { OrdersComponent } from './components/main/user-detail/orders/orders.component';
import { TrackOrderComponent } from './components/main/user-detail/track-order/track-order.component';
import { ChangePasswordComponent } from './components/main/user-detail/change-password/change-password.component';
import { DetailsComponent } from './components/main/user-detail/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    MyfilterPipe,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    FormErrorsComponent,
    DashboardComponent,
    MainComponent,
    MenuComponent,
    UserDetailComponent,
    ChangePasswordComponent,
    CartComponent,
    OrdersComponent,
    TrackOrderComponent,
    DetailsComponent,
    UnauthorisedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    FormValidationsService,
    UserService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

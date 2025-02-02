import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { ProdottiComponent } from './pages/prodotti/prodotti.component';
import { LoginComponent } from './auth/login/login.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './auth/register/register.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { DettaglioProdottoComponent } from './pages/dettaglio-prodotto/dettaglio-prodotto.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { CategoriesComponent } from './shared/categories/categories.component';
import { SummaryOrderComponent } from './pages/summary-order/summary-order.component';
import { HeaderComponent } from './shared/header/header.component';
import { PopularProductsComponent } from './shared/popular-products/popular-products.component';
import { NewProductsComponent } from './shared/new-products/new-products.component';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProdottiComponent,
    CarrelloComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    SpinnerComponent,
    DettaglioProdottoComponent,
    WishlistComponent,
    PaymentComponent,
    CategoriesComponent,
    SummaryOrderComponent,
    HeaderComponent,
    PopularProductsComponent,
    NewProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true 
  },
  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
],
  bootstrap: [AppComponent],
})
export class AppModule {}

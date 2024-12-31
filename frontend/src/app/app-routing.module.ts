import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProdottiComponent } from './pages/prodotti/prodotti.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { DettaglioProdottoComponent } from './pages/dettaglio-prodotto/dettaglio-prodotto.component';
import { authGuard } from './guards/auth.guard';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SummaryOrderComponent } from './pages/summary-order/summary-order.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'user', component: UsersComponent },
  { path: 'prodotti', component: ProdottiComponent},
  { path: 'prodotti/:prodotto_id', component: DettaglioProdottoComponent},
  { path: 'wishlist', component: WishlistComponent, canActivate: [authGuard]},
  { path: 'ordini', component: CarrelloComponent, canActivate: [authGuard]},
  { path: 'pagamento', component: PaymentComponent, canActivate: [authGuard]},
  { path: 'order-summary', component: SummaryOrderComponent, canActivate: [authGuard]},
  { path: 'header', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

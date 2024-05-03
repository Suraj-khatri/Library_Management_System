import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AuthComponent } from './layout/auth/auth.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './layout/auth/authguard/auth.guard';
import { DashboardComponent } from './layout/navigation/dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminAuthGuard } from './layout/newauth/admin-auth.guard';
import { UserAuthGuard } from './layout/newauth/user-auth.guard';

const routes: Routes = [
  // {
  //   path: '', component: AuthComponent
  // },
  {
    path:'',component:AuthComponent
  },

  {
    path: 'auth', component: AuthComponent
  },


  {
    path: 'navigation', component: NavigationComponent,canActivate:[AdminAuthGuard],children: [
      {
        path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule)
      },
      {
        path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule)
      },
      {
        path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      { path: 'dashboard', component: DashboardComponent },


      {
        path: 'cmembership', loadChildren: () => import('./customermembership/customermembership.module').then(m => m.CustomermembershipModule)
      },
      {
        path: 'borrow', loadChildren: () => import('./borrow/borrow.module').then(m => m.BorrowModule)
      },
    ]
  },
  {
    path:'customer',component:CustomerComponent,canActivate: [UserAuthGuard]
  },

  {path:'game',component:GameComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

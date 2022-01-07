import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {path: '**', component: NotPageFoundComponent},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

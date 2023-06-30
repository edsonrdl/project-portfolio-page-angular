import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../view/pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'Career',
    loadChildren: () => import('../view/pages/career/career.module').then((m) => m.CareerModule),
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

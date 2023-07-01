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
    path: 'professionalCareer',
    loadChildren: () => import('../view/pages/professional-career/professional-career.module').then((m) => m.ProfessionalCareerModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'academicCareer',
    loadChildren: () => import('../view/pages/academic-career/academic-career.module').then((m) => m.AcademicCareerModule),
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

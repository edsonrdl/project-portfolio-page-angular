import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicCareerComponent } from './academic-career.component';

const routes: Routes = [
  {
    path: '',
    component: AcademicCareerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicCareerRoutingModule {}

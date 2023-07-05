import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelListAcademicComponent } from './model-list-academic.component';

const routes: Routes = [
  {
    path: '',
    component: ModelListAcademicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoldeListAcademicRoutingModule {}

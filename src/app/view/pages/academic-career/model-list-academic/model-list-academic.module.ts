import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoldeListAcademicRoutingModule } from './model-list-academic.routing';
import { throwIfAlreadyLoaded } from '../../../../services/guards/module-import.guard';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MoldeListAcademicRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class ModelListAcademicModule {
  constructor(@Optional() @SkipSelf() parentModule: ModelListAcademicModule) {
    throwIfAlreadyLoaded(parentModule, 'ModelListAcademicModule');
  }
}

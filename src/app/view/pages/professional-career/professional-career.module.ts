import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ProfessionalCareerComponent } from './professional-career.component';
import {ProfessionalCareerRoutingModule } from './professional-career.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    FlexLayoutModule,
    ProfessionalCareerRoutingModule,
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
  declarations: [ProfessionalCareerComponent],
  providers: [],
})
export class ProfessionalCareerModule {
  constructor(@Optional() @SkipSelf() parentModule: ProfessionalCareerModule) {
    throwIfAlreadyLoaded(parentModule, 'ProfessionalCareerModule');
  }
}

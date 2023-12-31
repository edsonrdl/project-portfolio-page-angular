import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcademicCareerComponent } from './academic-career.component';
import { AcademicCareerRoutingModule } from './academic-career.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import { TreeListAcademicModule } from "../../components/tree-list-academic.component/tree-list-academic.module";


@NgModule({
    bootstrap: [AcademicCareerComponent],
    exports: [],
    declarations: [AcademicCareerComponent],
    providers: [],
    imports: [
        AcademicCareerRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        FontAwesomeModule,
        MatMenuModule,
        TreeListAcademicModule
    ]
})
export class AcademicCareerModule {
  constructor(@Optional() @SkipSelf() parentModule: AcademicCareerModule) {
    throwIfAlreadyLoaded(parentModule, 'AcademicCareerModule');
  }
}

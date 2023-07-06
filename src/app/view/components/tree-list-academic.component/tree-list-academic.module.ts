import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TreeListAcademicComponent } from "./tree-list-academic.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
declarations: [TreeListAcademicComponent],
exports: [TreeListAcademicComponent],
imports: [
  CommonModule,
	MatTreeModule,
	MatIconModule,
  FontAwesomeModule
],
bootstrap: [TreeListAcademicComponent],
})
export class TreeListAcademicModule {}

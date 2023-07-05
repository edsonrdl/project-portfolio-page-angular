import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TreeListAcademicComponent } from "./tree-list-academic.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
declarations: [TreeListAcademicComponent],
exports: [TreeListAcademicComponent],
imports: [
  CommonModule,
	MatTreeModule,
	MatIconModule,
],
bootstrap: [TreeListAcademicComponent],
})
export class TreeListAcademicModule {}

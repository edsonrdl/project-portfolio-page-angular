import { Component } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener }from "@angular/material/tree";
import {ModelListAcademic} from "../model-list/model-list-academic";
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
interface Family {
label: string;
children?: Family[];
}

const FAMILY_TREE: Family[] = ModelListAcademic;
interface ExampleFlatNode {
expandable: boolean;
label: string;
level: number;
}
@Component({
selector: "app-tree-list-academic",
templateUrl: "./tree-list-academic.component.html",
styleUrls: ["./tree-list-academic.component.scss"],
})

export class TreeListAcademicComponent   {
  ModelListAcademic: Array<any>;
  faExclamationTriangle=faExclamationTriangle
private _transformer = (node: Family, level: number) => {
	return {
	expandable: !!node.children && node.children.length > 0,
	label: node.label,
	level: level,
	};
} ;

treeControl = new FlatTreeControl<ExampleFlatNode>(
	(node) => node.level,
	(node) => node.expandable
);

treeFlattener = new MatTreeFlattener(
	this._transformer,
	(node) => node.level,
	(node) => node.expandable,
	(node) => node.children
);

dataSource = new MatTreeFlatDataSource(
	this.treeControl, this.treeFlattener);
constructor() {
    this.ModelListAcademic = ModelListAcademic;
	this.dataSource.data = FAMILY_TREE;
}

hasChild = (_: number,
	node: ExampleFlatNode) => node.expandable;
}

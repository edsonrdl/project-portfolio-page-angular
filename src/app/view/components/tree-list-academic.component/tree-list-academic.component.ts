import { Component } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener }from "@angular/material/tree";

interface Family {
name: string;
children?: Family[];
}

const FAMILY_TREE: Family[] = [
{
	name: "Joyce",
	children: [
	{ name: "Mike" },
	{ name: "Will" },
	{ name: "Eleven", children: [{ name: "Hopper" }] },
	{ name: "Lucas" },
	{ name: "Dustin", children: [{ name: "Winona" }] },
	],
},
{
	name: "Jean",
	children: [{ name: "Otis" }, { name: "Maeve" }],
},
];

interface ExampleFlatNode {
expandable: boolean;
name: string;
level: number;
}

@Component({
selector: "app-tree-list-academic",
templateUrl: "./tree-list-academic.component.html",
styleUrls: ["./tree-list-academic.component.scss"],
})

export class TreeListAcademicComponent   {
private _transformer = (node: Family, level: number) => {
	return {
	expandable: !!node.children && node.children.length > 0,
	name: node.name,
	level: level,
	};
};

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
	this.dataSource.data = FAMILY_TREE;
}

hasChild = (_: number,
	node: ExampleFlatNode) => node.expandable;
}

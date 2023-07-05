
@Component({
  selector: 'app-model-list-academic',
  templateUrl: 'model-list-academic.component.html',
  providers: [LoadmoreDatabase],
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
})
export class ModelListAcademicComponent {
  nodeMap = new Map<string, LoadmoreFlatNode>();
  treeControl: FlatTreeControl<LoadmoreFlatNode>;
  treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
  dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;

  constructor(private _database: LoadmoreDatabase) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren,
    );

    this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel, this.isExpandable);

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });

    _database.initialize();
  }

  getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;

  transformer = (node: LoadmoreNode, level: number) => {
    const existingNode = this.nodeMap.get(node.item);

    if (existingNode) {
      return existingNode;
    }

    const newNode = new LoadmoreFlatNode(
      node.item,
      level,
      node.hasChildren,
      node.loadMoreParentItem,
    );
    this.nodeMap.set(node.item, newNode);
    return newNode;
  };

  getLevel = (node: LoadmoreFlatNode) => node.level;

  isExpandable = (node: LoadmoreFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;

  isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.item === LOAD_MORE;

  loadMore(item: string) {
    this._database.loadMore(item);
  }

  loadChildren(node: LoadmoreFlatNode) {
    this._database.loadMore(node.item, true);
  }
}

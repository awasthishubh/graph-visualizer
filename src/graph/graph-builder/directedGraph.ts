class GraphBuild{
    nodes:{id:number, label: string}[]=[];
    edges:{from:number, to: number}[]=[];
    N;
    constructor(n:number,e:number[][]){
        for(let i=0; i<n; i++){
            this.nodes.push({ id: i+1, label: (i+1).toString() })
        }
        if(e){
            e.forEach(edge => {
                this.edges.push({ from: edge[0], to: edge[1] });
            });
        }
        this.N=n;
    }
    addEdge(a:number,  b:number){
        if(a>0 && a<=this.N && b>0 && b<=this.N){
            this.edges.push({ from: a, to: b });
        }
    }
    getEdges(){ return this.edges; }
    getNodes(){ return this.nodes; }
    getGraph(){
        return {nodes:this.nodes, edges:this.edges}
    }
}

export default GraphBuild;
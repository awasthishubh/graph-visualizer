const format: any = {
    unw: {
        edg: {
            text: "Provide an array G where G[i] = [ui, vi] denotes that there is an edge between nodes ui and vi.",
            ex: "[[1,2],[1,3],[2,3]]",
            in: "[[1,2],[1,5],[5,2],[4,3],[4,5],[3,2],[6,4]]",
            exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
        },
        adj: {
            text: "Provide an array G where G[i] is the list of vertices adjacent to the ith vertex. The size of the array is equal to the number of vertices.",
            ex: "[[2,3],[3],[]]",
            in: "[[2,3],[],[4,5],[3],[1],[4,1]]",
            exp: "Means there are edges from 1 to 2,3 from 1 to 3 and 2 to 3."
        }
    },
    w: {
        edg: {
            text: "Provide an array G where G[i] = [ui, vi, wi] denotes that there is an edge between nodes ui and vi with weight wi.",
            ex: "[[1,2,8],[1,3,9],[2,3,7]]",
            in: "[[1,2,5],[1,3,7],[2,3,8],[4,5,9],[5,6,1],[6,4,3],[6,1,9]]",
            exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
        },
        adj: {
            text: "Provide an array G where G[i] is the list of pair of vertex and distance adjacent to the ith vertex. The size of the array is equal to the number of vertices.",
            ex: `[\n  [[2,8],[3,9]],\n  [[3,7]],\n  []\n]`,
            in: `[[[2,5],[3,3]],[[3,7]],[[4,8],[5,9]],[[2,3],[3,1]],[[1,9]],[[4,4],[1,6]]]`,
            exp: "Means there are edges from 1 to 2, 1 to 3 and 2 to 3."
        }
    }

}
export default format;


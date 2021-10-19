/**
Compared to a normal tree, BST has the following properties:

    every left child has a smaller value than its parent
    every right child has a larger value than its parent
    every node can contain from 0 to 2 children.

 */

class Node{
    constructor(data){
        this.data = data,
        this.left = null,
        this.right = null
    }
}

class BinarySearchTreePT {
    constructor() {
        this.tree = null 
    }

    constructTree(arr) {
        let addedNode = new Node(arr[0])
        let high = 0
        let low = 0

        if(addedNode.data > arr[1]){
            high = addedNode.data
            low = arr[1]
            addedNode.left = low
        } 

        arr.map((e,i) => {
            if(high > e) {
                addedNode.left += new Node(e)
            } else {
                addedNode.right += new Node(e)
            }

            
        })

        this.tree = addedNode

        return this
    }
}


let test1 = new BinarySearchTreePT()
let tree1 = test1.constructTree([10, 5, 1, 7, 40, 50])
console.log(JSON.stringify(tree1.tree.left, null, 2))
// console.dir(tree1, { depth: null });
// console.log(util.format(tree1.tree.left))
console.log(tree1 )
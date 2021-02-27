class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    // BFS (Bread First Search)
    bfsPrint() {
        const queue = [ root ];
        while(queue.length > 0) {
            const curr = queue.shift();

            console.log(curr.val);

            if(curr.left !== null) {
                queue.push(curr.left);
            }

            if(curr.right !== null) {
                queue.push(curr.right);
            }
        }

        return queue;
    }
}

const nodeA = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');

//          a
//        /   \
//      b       c 
//     /
//    F
//      \
//        E

const root = nodeA;
root.left = nodeB;
root.right = nodeC;

nodeB.left = nodeF;
nodeF.right = nodeE;

const btree = new BinaryTree(root);
btree.bfsPrint();
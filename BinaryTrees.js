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
    bfs(target) {
        const queue = [ this.root ];
        while(queue.length > 0) {
            const curr = queue.shift();
            
            if(curr.val === target) {
                return true;
            }

            if(curr.left !== null) {
                queue.push(curr.left);
            }

            if(curr.right !== null) {
                queue.push(curr.right);
            }
        }

        return false;
    } // Time O(n), Space O(n)


    bfPrint() {
        const queue = [ this.root ];
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
    } // Time O(n), Space O(n)

    sum() {
        const queue = [ this.root ];
        let sum = 0;
        while(queue.length > 0) {
            const curr = queue.shift();

            sum += curr.val;

            if(curr.left !== null) {
                queue.push(curr.left);
            }

            if(curr.right !== null) {
                queue.push(curr.right);
            }
        }

        return sum;
     } // Time O(n), Space O(n)
}

const nodeA = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');

const root = nodeA;
root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeF;
nodeF.right = nodeE;

//          a
//        /   \
//      b       c 
//     /
//    F
//      \
//        E

const btree = new BinaryTree(root);
btree.bfPrint();
console.log(btree.bfs('e'));


const numericRoot = new Node(1);
numericRoot.left = new Node(25); 
numericRoot.right = new Node(3); 

const numericBTree =new BinaryTree(numericRoot);
console.log(numericBTree.sum());
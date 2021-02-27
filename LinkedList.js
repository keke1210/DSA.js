class Node {
    constructor(val){
        this.val = val;
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val){
        if(this.head === null){
            this.head = new Node(val);
            return;
        }

        let curr = this.head;
        while(curr.next !== null) {
            curr = curr.next;
        }

        curr.next = new Node(val);
    }

    contains(target) {
        let curr = this.head;
        while(curr !== null) {
            if(curr.val === target) {
                return true;
            }

            curr = curr.next;
        }

        return false;
    }

    remove(target) {
        if(this.head.val === target) {
            this.head = this.head.next;
        }

        let curr = this.head;
        let prev = null;

        while(curr != null) {
            if(curr.val === target) {
                prev.next = curr.next;
            }
            prev = curr;
            curr = curr.next;
        }

        // this.head = curr;
    } // Time O(n), Space O(1)

    reverse() {
        let prev = null;
        let curr = this.head;

        while(curr !== null) {
            const next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }

        this.head = prev;
    } // Time O(n), Space O(1)

    print() {
        let resultStr = '';
        let curr = this.head;
        while(curr !== null) {
            resultStr += curr.val.toString() + '->';
            curr = curr.next;
        }
        
        resultStr += 'NULL'
        console.log(resultStr);
    }
}

const list = new LinkedList();
list.append('a'); 
list.append('b'); 
list.append('c'); 
list.append(42); 
// list.remove('b'); 
list.print();
list.reverse();
list.print();
console.log(list.contains('b'));
console.log(list.contains('g'));
console.log(list.contains(42));


const sumList = (head) => {
    let sum = 0;
    let curr = head;
    while(curr !== null) {
        sum += curr.val;
        curr = curr.next;
    }

    return sum;
}

const listOfNumbers = new LinkedList();
listOfNumbers.append(1); 
listOfNumbers.append(2); 
listOfNumbers.append(5); 

console.log(sumList(listOfNumbers.head));
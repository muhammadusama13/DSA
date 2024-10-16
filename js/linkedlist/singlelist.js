let number = 1
class Node {
    constructor(data) {
        this.value = data;
        this.next = null
    }
}
class Linkedlist {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head
        this.count = 0
    }

    createNode(node) {
        this.tail.next = node
        this.tail = node
    }
}


let linkedlist = new Linkedlist(number)

linkedlist.createNode(new Node(number++))
linkedlist.createNode(new Node(number++))
// linkedlist.createNode(new Node(number++))
// linkedlist.createNode(new Node(number++))
// linkedlist.createNode(new Node(number++))
// linkedlist.createNode(new Node(number++))



console.log(linkedlist)









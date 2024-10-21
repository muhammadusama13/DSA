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
        this.count++
    }

    displayNodes() {
        let temp = this.head
        while (temp) {
            console.log(temp.value)
            // console.log(temp)
            temp = temp.next;
        }
    }

    addAtNumber(number, node) {
        let temp = this.head
        let count = 0;
        while (temp) {
            // if (number == count) {
            //     console.log('temp', temp)
            //     console.log('new node', node)
            // }

            if (number == count) {
                node.next = temp.next
                temp.next = node
                // if (node.next == null) {
                //     this.tail = node
                // }
                temp = null

                break
            }
            temp = temp.next
            count++
        }

    }


}


let linkedlist = new Linkedlist(1)

linkedlist.createNode(new Node(2))
linkedlist.createNode(new Node(3))
linkedlist.createNode(new Node(4))
linkedlist.createNode(new Node(5))

linkedlist.addAtNumber(3, new Node(9))


linkedlist.displayNodes()









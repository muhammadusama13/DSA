class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class SingleLinkedList {
  head = null;

  createNode(node) {
    if (this.head) {
      let temp = this.head;
      while (temp) {
        if (temp.next) {
          temp = temp.next;
        } else {
          temp.next = node;
          temp = null;
        }
      }
    } else {
      this.head = node;
    }
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log("data", temp.data);
      temp = temp.next;
    }
  }

  createAtStart(node) {
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }
}

const sl = new SingleLinkedList();

sl.createNode(new Node(1));
sl.createNode(new Node(2));
sl.createNode(new Node(3));
sl.createNode(new Node(4));
sl.createNode(new Node(5));

sl.createAtStart(new Node(6));
sl.createAtStart(new Node(11));
sl.createAtStart(new Node(12));
sl.createAtStart(new Node(14));

sl.display();
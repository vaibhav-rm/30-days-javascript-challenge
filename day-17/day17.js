// Day 17: Data Structures

// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    remove() {
      if (this.head === null) return null;
      if (this.head.next === null) {
        const value = this.head.value;
        this.head = null;
        return value;
      }
  
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      const value = current.next.value;
      current.next = null;
      return value;
    }
  
    display() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.display(); // Logs: 1, 2, 3
  console.log(list.remove()); // Logs: 3
  list.display(); // Logs: 1, 2
  
  // Activity 2: Stack
  
  // Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      if (this.items.length === 0) return null;
      return this.items.pop();
    }
  
    peek() {
      if (this.items.length === 0) return null;
      return this.items[this.items.length - 1];
    }
  }
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // Logs: 3
  console.log(stack.pop()); // Logs: 3
  console.log(stack.peek()); // Logs: 2
  
  // Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
  function reverseStringWithStack(str) {
    const stack = new Stack();
    for (let char of str) {
      stack.push(char);
    }
    let reversed = '';
    while (stack.peek() !== null) {
      reversed += stack.pop();
    }
    return reversed;
  }
  
  console.log(reverseStringWithStack('hello')); // Logs: 'olleh'
  
  // Activity 3: Queue
  
  // Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(value) {
      this.items.push(value);
    }
  
    dequeue() {
      if (this.items.length === 0) return null;
      return this.items.shift();
    }
  
    front() {
      if (this.items.length === 0) return null;
      return this.items[0];
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.front()); // Logs: 1
  console.log(queue.dequeue()); // Logs: 1
  console.log(queue.front()); // Logs: 2
  
  // Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
  function simulatePrinterQueue(jobs) {
    const printerQueue = new Queue();
    for (let job of jobs) {
      printerQueue.enqueue(job);
    }
    while (printerQueue.front() !== null) {
      console.log(`Printing job: ${printerQueue.dequeue()}`);
    }
  }
  
  simulatePrinterQueue(['Job1', 'Job2', 'Job3']); // Logs: 'Printing job: Job1', 'Printing job: Job2', 'Printing job: Job3'
  
  // Activity 4: Binary Tree
  
  // Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    inOrderTraversal(node) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  binaryTree.insert(3);
  binaryTree.insert(7);
  binaryTree.insert(2);
  binaryTree.insert(4);
  binaryTree.insert(6);
  binaryTree.insert(8);
  binaryTree.inOrderTraversal(binaryTree.root); // Logs: 2, 3, 4, 5, 6, 7, 8
  
  // Activity 5: Graph (Optional)
  
  // Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
  class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1);
    }
  
    bfs(startVertex) {
      const visited = new Set();
      const queue = [startVertex];
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          console.log(vertex);
          visited.add(vertex);
          for (const neighbor of this.adjList.get(vertex)) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.bfs('A'); // Logs: A, B, C, D, E
  
  // Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
  function bfsShortestPath(graph, startVertex, endVertex) {
    const visited = new Set();
    const queue = [[startVertex]];
  
    while (queue.length > 0) {
      const path = queue.shift();
      const vertex = path[path.length - 1];
  
      if (vertex === endVertex) {
        return path;
      }
  
      if (!visited.has(vertex)) {
        visited.add(vertex);
        for (const neighbor of graph.adjList.get(vertex)) {
          const newPath = [...path, neighbor];
          queue.push(newPath);
        }
      }
    }
    return null;
  }
  
  const shortestPath = bfsShortestPath(graph, 'A', 'E');
  console.log(`Shortest path from A to E: ${shortestPath}`); // Logs: Shortest path from A to E: A, C, E
  
class Node{ //define our node class
  constructor(value, left, right) {
    this.val = value;
    this.left = left;
    this.right = right;
  }

  toString() { //define a toString method which uses built in JSON.stringify
    return JSON.stringify(this)
  }
}

const serialize = (node) => node.toString() // serialize simply calls JSON.stringify on the object
const deserialize = (serializedNode) => JSON.parse(serializedNode) // deserialize calls JSON.parse() on the serialized string
  
let node = new Node( //create the input node
  "root",
  new Node("left", new Node("left.left")),
  new Node("right")
);

console.log(deserialize(serialize(node)).left.left.val) // outputs left.left

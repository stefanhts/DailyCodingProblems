# Day 3 Problem 3
Today's problem takes a turn away from the past 2. Now, instead of having a problem involving array manipulation, we need to deserialize
and serialize methods for a binary tree. Here's the problem they give us:
> Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
For example, given the following Node class

``` python
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
The following test should pass:
``` python
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

As I mentioned before, the goal of what I am doing with these problems is to sharpen my JavaScript skills, so while I could answer this problem in
Python (which is the language the class is given in), I would prefer to transfer it to JavaScript. So here is our linked list class redefined in 
JavaScript:
``` javascript
class Node{
  constructor(value, left, right) {
    this.val = value;
    this.left = left;
    this.right = right;
  }
}
```
I am actually going to make some modifications to this declaration in order to solve the problem, but we'll get to that. In summary what we have here
is a basic binary search tree with each node having a value, left node, and a right node. Now it's time to break the problem down.

## What's the goal?
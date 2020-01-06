import Node from './Node';
import {searchTree, removeNode} from './utils';

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
        } else {
            return searchTree(node, data);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        this.root = removeNode(this.root, data);
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        return (left < right) ? left + 1 : right + 1;
    }

    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }

        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        return (left > right) ? left + 1 : right + 1;
    }

    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            const result = [];

            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }

            traverseInOrder(this.root);

            return result;
        }
    }

    preOrder() {
        if (this.root == null) {
            return null;
        } else {
            const result = [];

            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }

            traversePreOrder(this.root);

            return result;
        }
    }

    postOrder() {
        if (this.root == null) {
            return null;
        } else {
            const result = [];

            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }

            traversePostOrder(this.root);

            return result;
        }
    }

    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                }
                if (node.right != null) {
                    Q.push(node.right);
                }
            }

            return result;
        }

        return null;
    };
}

export default BinaryTree;

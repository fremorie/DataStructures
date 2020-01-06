import Node from './Node';

export const searchTree = (node, data) => {
    if (data < node.data) {
        if (node.left === null) {
            node.left = new Node(data);
        } else {
            return searchTree(node.left);
        }
    } else if (data > node.data) {
        if (node.right === null) {
            node.right = new Node(data);
        } else {
            return searchTree(node.right);
        }
    } else {
        return null;
    }
};

export const removeNode = (node, data) => {
    if (node == null) {
        return null;
    }

    if (data == node.data) {
        if (node.left == null && node.right == null) {
            return null;
        }

        if (node.left == null) {
            return node.right;
        }

        if (node.right == null) {
            return node.left;
        }

        let tempNode = node.right;

        while (tempNode.left !== null) {
            tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);

        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);

        return node;
    } else {
        node.right = removeNode(node.right, data);

        return node;
    }
};

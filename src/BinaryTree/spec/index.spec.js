import BinaryTree from '../.';

describe('BinaryTree', () => {
    const tree = new BinaryTree();

    tree.add(9);
    tree.add(4);
    tree.add(17);
    tree.add(3);
    tree.add(6);
    tree.add(22);
    tree.add(5);
    tree.add(7);
    tree.add(20);

    it('findMaxHeight', () => {
        expect(tree.findMaxHeight()).toEqual(1);
    });

    it('findMinHeight', () => {
        expect(tree.findMinHeight()).toEqual(1);
    });

    it('findMax', () => {
        expect(tree.findMax()).toEqual(17);
    });

    it('findMin', () => {
        expect(tree.findMin()).toEqual(4);
    });

    it('isBalanced', () => {
        expect(tree.isBalanced()).toEqual(true);
    });

    it('inOrder', () => {
        expect(tree.inOrder()).toEqual([4, 9, 17]);
    });

    it('preOrder', () => {
        expect(tree.preOrder()).toEqual([9, 4, 17]);
    });

    it('postOrder', () => {
        expect(tree.postOrder()).toEqual([4, 17, 9]);
    });

    it('levelOrder', () => {
        expect(tree.levelOrder()).toEqual([9, 4, 17]);
    });
});

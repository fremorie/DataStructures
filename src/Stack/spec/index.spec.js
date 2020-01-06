import Stack from '../.';

describe('Stack', () => {
    const testStack = new Stack();

    it('push', () => {
        testStack.push('yandex');

        expect(testStack.peek).toEqual('yandex');
        expect(testStack.size).toEqual(1);

        testStack.push('market');

        expect(testStack.peek).toEqual('market');
        expect(testStack.size).toEqual(2);
    });

    it('pop', () => {
        const poppedValue = testStack.pop();

        expect(poppedValue).toEqual('market');
        expect(testStack.peek).toEqual('yandex');
        expect(testStack.size).toEqual(1);
    });

    it('pop, случай пустого стека', () => {
        const emptyStack = new Stack();

        expect(emptyStack.size).toEqual(0);

        const poppedValue = emptyStack.pop();

        expect(poppedValue).toEqual(undefined);
        expect(emptyStack.size).toEqual(0);
    });
});

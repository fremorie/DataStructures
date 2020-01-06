import Queue from '../.';

describe('Queue', () => {
    it('isEmpty', () => {
        const emptyQueue = new Queue();

        expect(emptyQueue.isEmpty).toEqual(true);
    });

    it('front', () => {
        const testQueue = new Queue(['yandex', 'market']);

        expect(testQueue.front).toEqual('yandex');
    });

    it('enqueue', () => {
        const testQueue = new Queue(['yandex', 'market']);

        testQueue.enqueue('лучше всех');

        expect(testQueue.front).toEqual('yandex');
        expect(testQueue.size).toEqual(3);
        expect(testQueue.isEmpty).toEqual(false);
    });

    it('dequeue', () => {
        const testQueue = new Queue(['yandex', 'market']);

        testQueue.dequeue();

        expect(testQueue.front).toEqual('market');
        expect(testQueue.size).toEqual(1);
    });
});

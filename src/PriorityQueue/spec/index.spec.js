import PriorityQueue from '../.';

describe('PriorityQueue', () => {
    it('isEmpty', () => {
        const emptyQueue = new PriorityQueue();

        expect(emptyQueue.isEmpty).toEqual(true);
    });

    it('front', () => {
        const testQueue = new PriorityQueue([['yandex', 2], ['market', 10]]);

        expect(testQueue.front).toEqual(['yandex', 2]);
    });

    it('enqueue', () => {
        const testQueue = new PriorityQueue([['yandex', 10], ['market', 1]]);

        testQueue.enqueue(['лучше всех', 100500]);

        expect(testQueue.front).toEqual(['yandex', 10]);
        expect(testQueue.size).toEqual(3);
        expect(testQueue.isEmpty).toEqual(false);
    });

    it('dequeue', () => {
        const testQueue = new PriorityQueue([['yandex', 1], ['market', 2]]);

        const dequeuedValue = testQueue.dequeue();

        expect(dequeuedValue).toEqual('yandex');
        expect(testQueue.front).toEqual(['market', 2]);
        expect(testQueue.size).toEqual(1);
    });
});

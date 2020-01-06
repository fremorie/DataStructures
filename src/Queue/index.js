class Queue {
    constructor(collection = []) {
        this.collection = collection;
    }

    enqueue(element) {
        this.collection.push(element);
    };

    dequeue() {
        return this.collection.shift();
    };

    get front() {
        return this.collection[0];
    };

    get size() {
        return this.collection.length;
    };

    get isEmpty() {
        return (this.collection.length === 0);
    };
}

export default Queue;

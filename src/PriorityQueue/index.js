class PriorityQueue {
    constructor(collection = []) {
        this.collection = collection;
    }

    enqueue(element) {
        if (this.isEmpty) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i=0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.collection.push(element);
            }
        }
    };

    dequeue() {
        const value = this.collection.shift();
        return value[0];
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

export default PriorityQueue;

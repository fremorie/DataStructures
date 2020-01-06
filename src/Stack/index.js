class Stack {
    constructor(count = 0, storage = {}) {
        this.count = count;
        this.storage = storage;
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    get size() {
        return this.count;
    }

    get peek() {
        return this.storage[this.count-1];
    }
}

export default Stack;

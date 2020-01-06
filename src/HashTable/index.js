import {hash} from './utils';

class HashTable {
    constructor(storage = [], storageLimit = 10) {
        this.storage = storage;
        this.storageLimit = storageLimit;
    }

    add(key, value) {
        const index = hash(key, this.storageLimit);

        if (this.storage[index] === undefined) {
            this.storage[index] = [
                [key, value]
            ];
        } else {
            let inserted = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    };

    remove(key) {
        const index = hash(key, this.storageLimit);

        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    };

    lookup(key) {
        const index = hash(key, this.storageLimit);

        if (this.storage[index] === undefined) {
            return;
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    };
}

export default HashTable;

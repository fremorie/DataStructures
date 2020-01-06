import HashTable from '../.';

describe('HashTable', () => {
    it('add', () => {
        const hashTable = new HashTable();
        hashTable.add('a', 1);
        hashTable.add('b', 2);

        expect(hashTable.lookup('a')).toEqual(1);
        expect(hashTable.lookup('b')).toEqual(2);
    });

    it('remove', () => {
        const hashTable = new HashTable();
        hashTable.add('a', 1);
        hashTable.add('b', 2);

        hashTable.remove('a');

        expect(hashTable.lookup('a')).toEqual(undefined);
        expect(hashTable.lookup('b')).toEqual(2);
    });
});

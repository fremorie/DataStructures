import Set from '../.';

describe('Set', () => {
    const testArray = [...Array(5).keys()];
    const testSet = new Set(testArray);
    const otherSet = new Set([3, 'a', 'b', 'c']);

    describe('has', () => {
        testArray.forEach(number => {
            it(`Метод has отрабатывает на элементе ${number}`, () => {
                expect(testSet.has(number)).toEqual(true);
            });
        });

        it('Метод has отрабатывает на отсутствующем элементе', () => {
            expect(testSet.has(100500)).toEqual(false);
        })
    });


    it('values', () => {
        expect(testSet.values).toEqual(testArray);
    });

    describe('add', () => {
        it('Метод add игнорирует добавление уже имеющихся элементов', () => {
            testSet.add(1);

            expect(testSet.size).toEqual(testArray.length);
        });

        it('Метод add добавляет новые элементы', () => {
            const newSet = new Set(testArray);

            newSet.add(20);

            expect(newSet.has(20)).toEqual(true);
            expect(newSet.size).toEqual(6);
        });
    });

    it('remove', () => {
        const newSet = new Set(testArray);

        newSet.remove(1);

        expect(newSet.has(1)).toEqual(false);
    });

    it('union', () => {
        expect(testSet.union(otherSet).values).toEqual([...testArray, 'a', 'b', 'c']);
    });

    it('intersection', () => {
        expect(testSet.intersection(otherSet).values).toEqual([3]);
    });

    it('difference', () => {
        expect(testSet.difference(otherSet).values).toEqual([0, 1, 2, 4]);
    });

    it('subset', () => {
        expect(testSet.subset(otherSet)).toEqual(false);
        expect(testSet.subset(new Set(testArray))).toEqual(true);
    });
});

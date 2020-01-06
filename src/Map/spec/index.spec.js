import Map from '../.';

let map;

describe('Map', () => {
    beforeEach(() => {
        map = new Map();
    });

    afterEach(() => {
        map.clear();
    });

    it('Корректно добавляет пары ключ-значение', () => {
        map.set('a', 1);
        map.set('b', 2);

        expect(map.size).toEqual(2);
        expect(map.values).toEqual([1, 2]);
        expect(map.get('a')).toEqual(1);
        expect(map.get('b')).toEqual(2);
    });

    it('Очищается', () => {
        map.set('a', 1);
        map.set('b', 2);

        map.clear();

        expect(map.size).toEqual(0);
    });

    it('Удаляет пару по ключу', () => {
        map.set('a', 1);
        map.set('b', 2);
        map.delete('b');

        expect(map.size).toEqual(1);
        expect(map.get('b')).toEqual(null);
    });
});

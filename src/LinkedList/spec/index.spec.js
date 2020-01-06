import LinkedList from '../.';

let testList;

const generateList = () => {
    testList = new LinkedList();
    testList.add('yandex');
    testList.add('market');
};

describe('LinkedList', () => {
    beforeEach(() => {
        generateList();
    });

    it('Добавляет элементы', () => {
        expect(testList.indexOf('yandex')).toEqual(0);
        expect(testList.indexOf('market')).toEqual(1);
    });

    it('Удаляет элементы', () => {
        testList.remove('yandex');

        expect(testList.indexOf('market')).toEqual(0);
        expect(testList.indexOf('yandex')).toEqual(-1);
    });

    it('Удаляет элементы по индексу', () => {
        testList.removeAt(0);

        expect(testList.indexOf('market')).toEqual(0);
        expect(testList.indexOf('yandex')).toEqual(-1);

        generateList();
        testList.removeAt(1);

        expect(testList.indexOf('yandex')).toEqual(0);
        expect(testList.indexOf('market')).toEqual(-1);
    });

    it('Хранит размер списка', () => {
        expect(testList.size).toEqual(2);

        testList.removeAt(0);

        expect(testList.size).toEqual(1);
    });

    it('Можно достать элемент по индексу', () => {
        expect(testList.elementAt(0)).toEqual('yandex');
        expect(testList.elementAt(1)).toEqual('market');
    });

    it('isEmpty', () => {
        const testList = new LinkedList();

        expect(testList.isEmpty).toEqual(true);

        testList.add('yandex');

        expect(testList.isEmpty).toEqual(false);
    });

    it('Добавляет элемент в указанное место', () => {
        const testList = new LinkedList();
        testList.add('yandex');
        testList.add('лучше всех');
        testList.addAt(1, 'market');
        testList.addAt(0, '!!!');

        expect(testList.elementAt(0)).toEqual('!!!');
        expect(testList.elementAt(1)).toEqual('yandex');
        expect(testList.elementAt(2)).toEqual('market');
        expect(testList.elementAt(3)).toEqual('лучше всех');
    });

    it('Игнорирует добавление элемента по индексу, если он превышает длину списка', () => {
        testList.addAt(100500, 'ololo');

        expect(testList.size).toEqual(2);
    });
});

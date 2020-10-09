import {OrderByPipe} from './order-by.pipe';

const testData = [
    {name: '1', value: 1},
    {name: 'b', value: 44},
    {name: 'f', value: 55},
    {name: 'a', value: 5},
];

describe('given OrderByPipe', () => {
    const pipe = new OrderByPipe();
    describe('and use sort for string properties', () => {
        it('as asc', () => {
            const result = pipe.transform(testData, 'name');
            expect(result).toEqual([
                {name: 'f', value: 55},
                {name: 'b', value: 44},
                {name: 'a', value: 5},
                {name: '1', value: 1},
            ]);
        });
        it('as desc', () => {
            const result = pipe.transform(testData, 'name', false);
            expect(result).toEqual([
                {name: '1', value: 1},
                {name: 'a', value: 5},
                {name: 'b', value: 44},
                {name: 'f', value: 55},
            ]);
        });
    });
    describe('and use sort for number properties', () => {
        it('as asc', () => {
            const result = pipe.transform(testData, 'value');
            expect(result).toEqual([
                {name: 'f', value: 55},
                {name: 'b', value: 44},
                {name: 'a', value: 5},
                {name: '1', value: 1},
            ]);
        });
        it('as desc', () => {
            const result = pipe.transform(testData, 'value', false);
            expect(result).toEqual([
                {name: '1', value: 1},
                {name: 'a', value: 5},
                {name: 'b', value: 44},
                {name: 'f', value: 55},
            ]);
        });
    });
});

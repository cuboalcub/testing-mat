import { compute } from './compute';
describe('compute test suite', () => {
    it('Should return 0 if input is 0', () => {
       const result = compute(-1);
       expect(result).toBe(0);
    });

    it('Should return 1 if input is 1', () => {
        const result = compute(1);
        expect(result).toBe(1);
    });
});
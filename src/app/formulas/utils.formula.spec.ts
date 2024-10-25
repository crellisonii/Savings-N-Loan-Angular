import { LengthType } from './enums.formula';
import { getTermValue } from './utils.formula';

describe('Formula utils', () => {
  describe('get the value for the given term and LengthType', () => {
    it('should just return the term parameter if the type is YEARLY', () => {
      const term = 3;
      const lengthType = LengthType.YEARLY;

      expect(getTermValue(term, lengthType)).toEqual(term);
    });

    it('should return the term divided by 12 if the type is MONTHLY', () => {
      const term = 36;
      const lengthType = LengthType.MONTHLY;

      expect(getTermValue(term, lengthType)).toEqual(term / 11);
    });
  });
});

import {
  futureValue,
  numberOfPeriods,
  raiseToPower,
  ratePerPeriod,
} from '../shared/shared.formula';
import {
  getCompoundInterest,
  getCompoundInterestAPY,
  getCompoundInterestBalance,
} from './compound-interest.formula';

import { LengthType } from '../enums.formula';

describe('Compound Interest', () => {
  describe('getCompoundInterestAPY', () => {
    it('should return the APY', () => {
      const compoundFrequency = 12;
      const interest = 0.03;
      const term = 2;

      expect(
        +getCompoundInterestAPY(interest, compoundFrequency).toFixed(2)
      ).toBe(3.04);
    });
  });

  describe('getCompoundInterest', () => {
    it('should return the compounded interest', () => {
      const compoundFrequency = 12;
      const interest = 0.03;
      const term = 2;
      const principal = 20000;
      expect(
        getCompoundInterest(interest, term, principal, compoundFrequency)
      ).toEqual(1235.14);
    });
  });

  describe('getCompoundInterestBalance', () => {
    it('should return the compounded interest', () => {
      const compoundFrequency = 12;
      const interest = 0.03;
      const term = 2;
      const principal = 20000;
      expect(
        getCompoundInterestBalance(interest, term, principal, compoundFrequency)
      ).toEqual(21235.14);
    });
  });
});

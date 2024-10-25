import {
  futureValue,
  numberOfPeriods,
  raiseToPower,
  ratePerPeriod,
  timeOffset,
} from './shared.formula';

import { LengthType } from '../enums.formula';

describe('Shared', () => {
  describe('ratePerPeriod', () => {
    it('should return the rate per period given the APR and compound period', () => {
      const apr = 0.2;
      const periods = 12;
      expect(ratePerPeriod(apr, periods)).toEqual(apr / periods);
    });

    it('should return 0 if periods parameter is 0', () => {
      const apr = 20;
      const periods = 0;
      expect(ratePerPeriod(apr, periods)).toEqual(0);
    });
  });

  describe('futureRate', () => {
    it('should return futureRate', () => {
      const apr = 0.2;
      const periods = 12;
      const rate = ratePerPeriod(apr, periods);

      expect(futureValue(rate)).toEqual(1 + rate);
    });
  });

  describe('raiseToPower', () => {
    it('should raise the given value to the given power', () => {
      const value = 10;
      const power = 2;

      expect(raiseToPower(value, power)).toEqual(100);
    });
  });

  describe('numberOfPeriodsValue', () => {
    it('should return the term parameter if both interest and term lengthTypes are YEARLY', () => {
      const term = 3;
      const interestLength = LengthType.YEARLY;
      const termLength = LengthType.YEARLY;

      expect(numberOfPeriods(term, interestLength, termLength)).toEqual(term);
    });

    it('should return the term parameter if both interest and term lengthTypes are MONTHLY', () => {
      const term = 36;
      const interestLength = LengthType.MONTHLY;
      const termLength = LengthType.MONTHLY;

      expect(numberOfPeriods(term, interestLength, termLength)).toEqual(term);
    });

    it('should return the term parameter divided by 12 if the interest lengthType is YEARLY and the term lengthType is MONTHLY', () => {
      const term = 36;
      const interestLength = LengthType.YEARLY;
      const termLength = LengthType.MONTHLY;

      expect(numberOfPeriods(term, interestLength, termLength)).toEqual(
        term / 12
      );
    });

    it('should return the term parameter multiplied by 12 if the interest lengthType is MONTHLY and the term lengthType is YEARLY', () => {
      const term = 3;
      const interestLength = LengthType.MONTHLY;
      const termLength = LengthType.YEARLY;

      expect(numberOfPeriods(term, interestLength, termLength)).toEqual(
        term * 12
      );
    });
  });

  describe('timeOffset', () => {
    it('should return the value parameter if both interest and term lengthTypes are YEARLY', () => {
      const value = 24;
      const interestLength = LengthType.YEARLY;
      const termLength = LengthType.YEARLY;

      expect(timeOffset(value, interestLength, termLength)).toEqual(value);
    });

    it('should return the value parameter if both interest and term lengthTypes are MONTHLY', () => {
      const value = 24;
      const interestLength = LengthType.MONTHLY;
      const termLength = LengthType.MONTHLY;

      expect(timeOffset(value, interestLength, termLength)).toEqual(value);
    });

    it('should return value divided by 12 if the interest lengthType is YEARLY and the term lengthType is MONTHLY', () => {
      const value = 36;
      const interestLength = LengthType.YEARLY;
      const termLength = LengthType.MONTHLY;

      expect(numberOfPeriods(value, interestLength, termLength)).toEqual(
        value / 12
      );
    });

    it('should return value multiplied by 12 if the interest lengthType is MONTHLY and the term lengthType is YEARLY', () => {
      const value = 3;
      const interestLength = LengthType.MONTHLY;
      const termLength = LengthType.YEARLY;

      expect(numberOfPeriods(value, interestLength, termLength)).toEqual(
        value * 12
      );
    });
  });
});

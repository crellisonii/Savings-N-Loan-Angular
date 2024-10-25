import {
  futureValue,
  numberOfPeriods,
  timeOffset,
} from '../shared/shared.formula';
import {
  getSimpleInterest,
  getSimpleInterestBalance,
} from './simple-interest.formula';

import { LengthType } from '../enums.formula';

describe('Simple Interest formulas', () => {
  describe('getSimpleInterest', () => {
    it('should return the amount of simple interest', () => {
      const principal = 20000;
      const interest = 0.03;
      const term = 2;
      const interestLength = LengthType.MONTHLY;
      const termLength = LengthType.YEARLY;

      expect(
        getSimpleInterest(principal, interest, term, interestLength, termLength)
      ).toEqual(14400);
    });

    it('should return the amount of simple interest', () => {
      const principal = 20000;
      const interest = 0.03;
      const term = 24;
      const interestLength = LengthType.YEARLY;
      const termLength = LengthType.MONTHLY;

      expect(
        getSimpleInterest(principal, interest, term, interestLength, termLength)
      ).toEqual(1200);
    });

    it('should return the amount of simple interest', () => {
      const principal = 20000;
      const interest = 0.03;
      const term = 2;
      const interestLength = LengthType.YEARLY;
      const termLength = LengthType.YEARLY;

      expect(
        getSimpleInterest(principal, interest, term, interestLength, termLength)
      ).toEqual(1200);
    });

    it('should return the amount of simple interest', () => {
      const principal = 20000;
      const interest = 0.03;
      const term = 24;
      const interestLength = LengthType.MONTHLY;
      const termLength = LengthType.MONTHLY;

      expect(
        getSimpleInterest(principal, interest, term, interestLength, termLength)
      ).toEqual(14400);
    });
  });

  describe('getSimpleInterestBalance', () => {
    it('should return the new principal after the term has ended', () => {
      const principal = 20000;
      const interest = 0.03;
      const term = 2;
      const interestLength = LengthType.MONTHLY;
      const termLength = LengthType.YEARLY;

      expect(
        getSimpleInterestBalance(
          principal,
          interest,
          term,
          interestLength,
          termLength
        )
      ).toEqual(34400);
    });

    it('should return the new principal after the term has ended', () => {
      const principal = 20000;
      const interest = 0.03;
      const term = 24;
      const interestLength = LengthType.YEARLY;
      const termLength = LengthType.MONTHLY;

      expect(
        getSimpleInterestBalance(
          principal,
          interest,
          term,
          interestLength,
          termLength
        )
      ).toEqual(21200);
    });

    it('should return the new principal after the term has ended', () => {
      const principal = 20000;
      const interest = 0.03;
      const term = 2;
      const interestLength = LengthType.YEARLY;
      const termLength = LengthType.YEARLY;

      expect(
        getSimpleInterestBalance(
          principal,
          interest,
          term,
          interestLength,
          termLength
        )
      ).toEqual(21200);
    });

    it('should return the new principal after the term has ended', () => {
      const principal = 20000;
      const interest = 0.03;
      const term = 24;
      const interestLength = LengthType.MONTHLY;
      const termLength = LengthType.MONTHLY;

      expect(
        getSimpleInterestBalance(
          principal,
          interest,
          term,
          interestLength,
          termLength
        )
      ).toEqual(34400);
    });
  });
});

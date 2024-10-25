import {
  futureValue,
  numberOfPeriods,
  timeOffset,
} from '../shared/shared.formula';

import { LengthType } from '../enums.formula';

/**
 * Function to calculate the amount of simple interest
 *
 * @param principal
 * @param interestRate
 * @param term
 * @param interestLength
 * @param termLength
 * @returns the amount of simple interest that has been accrued
 */
export const getSimpleInterest = (
  principal: number,
  interestRate: number,
  term: number,
  interestLength: LengthType,
  termLength: LengthType
): number => {
  const interest = principal * interestRate * term;
  return timeOffset(interest, interestLength, termLength);
};

/**
 * Function to calculate the principal plus simple interest
 *
 * @param principal
 * @param interestRate
 * @param term
 * @param interestLength
 * @param termLength
 * @returns the new principal after simple interest has been accrued
 */
export const getSimpleInterestBalance = (
  principal: number,
  interestRate: number,
  term: number,
  interestLength: LengthType,
  termLength: LengthType
): number => {
  const rate = timeOffset(interestRate * term, interestLength, termLength);
  const futureRate = futureValue(rate);
  return principal * futureRate;
};

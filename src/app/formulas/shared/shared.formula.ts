import { LengthType } from '../enums.formula';

/**
 * Function to calculate the rate per period
 *
 * @param apr The APR (annual percentage rate)
 * @param periods The number of periods
 * @returns The interest rate per period
 */
export const ratePerPeriod = (apr: number, periods: number): number => {
  return periods === 0 ? 0 : apr / periods;
};

/**
 * Function to calculate the future value
 *
 * @param apr The APR (annual percentage rate)
 * @param rate The number of periods
 * @returns The interest rate per period plus 1
 */
export const futureValue = (rate: number): number => {
  return 1 + rate;
};

/**
 * Function to return the given value raised to the given power
 *
 * @param value - The base value
 * @param power - The exponent
 * @returns Value raised to the given power
 */
export const raiseToPower = (value: number, power: number): number => {
  return Math.pow(value, power);
};

/**
 * Function to return the term value adjusting for yearly value if needed.
 * If both interest and term lengths are the same value, return term.
 * If interest is YEARLY and term is MONTHLY, return term / 12.
 * If interest is MONTHLY and term is YEARLY, return term * 12.
 *
 * @param term the length of time
 * @param interestLength
 * @param termLength
 * @returns the term based on interest and term lengths
 */
export const numberOfPeriods = (
  term: number,
  interestLength: LengthType,
  termLength: LengthType
): number => {
  const yearAdjustment = 12;
  if (
    interestLength === LengthType.YEARLY &&
    termLength === LengthType.MONTHLY
  ) {
    return term / yearAdjustment;
  }
  if (
    interestLength === LengthType.MONTHLY &&
    termLength === LengthType.YEARLY
  ) {
    return term * yearAdjustment;
  }
  return term;
};

/**
 * Function to calculate the time offset.
 * If both interest and term lengths are the same value, return value.
 * If interest is YEARLY and term is MONTHLY, return value / 12.
 * If interest is MONTHLY and term is YEARLY, return value * 12.
 *
 * @param value
 * @param interestLength
 * @param termLength
 * @returns
 */
export const timeOffset = (
  value: number,
  interestLength: LengthType,
  termLength: LengthType
): number => {
  const yearOffset = 12;
  if (
    interestLength === LengthType.YEARLY &&
    termLength === LengthType.MONTHLY
  ) {
    return value / yearOffset;
  }
  if (
    interestLength === LengthType.MONTHLY &&
    termLength === LengthType.YEARLY
  ) {
    return value * yearOffset;
  }
  return value;
};

/**
 * Function to get the
 *
 * @param compoundFrequency
 * @param years
 * @returns
 */
export const compoundTerm = (
  compoundFrequency: number,
  years: number
): number => {
  return compoundFrequency * years;
};

export const annualPercentageRate = (
  interestRate: number,
  compoundFrequency: number
): number => {
  return interestRate / compoundFrequency;
};

import { LengthType } from './enums.formula';

/**
 * Get the yearly term value based on Type
 * YEARLY: return the term value since it is in years already
 * MONTHLY: return the term value divided by 12 to get the yearly value
 *
 * @param term
 * @param LengthType
 * @returns
 */
export const getTermValue = (term: number, lengthType: LengthType): number => {
  return lengthType === LengthType.YEARLY ? term : term / 12;
};

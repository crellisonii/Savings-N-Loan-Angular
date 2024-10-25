import {
  annualPercentageRate,
  compoundTerm,
  futureValue,
  raiseToPower,
} from '../shared/shared.formula';

export const getCompoundInterestAPY = (
  interestRate: number,
  compoundFrequency: number
): number => {
  const apr = annualPercentageRate(interestRate, compoundFrequency);
  const future = futureValue(apr);
  const raised = raiseToPower(future, compoundFrequency);
  return (raised - 1) * 100;
};

export const getCompoundInterest = (
  interestRate: number,
  years: number,
  principal: number,
  compoundFrequency: number
): number => {
  const term = compoundTerm(compoundFrequency, years);
  const apr = annualPercentageRate(interestRate, compoundFrequency);
  const future = futureValue(apr);
  const raised = raiseToPower(future, term);
  return +(principal * (raised - 1)).toFixed(2);
};

export const getCompoundInterestBalance = (
  interestRate: number,
  years: number,
  principal: number,
  compoundFrequency: number
): number => {
  const term = compoundTerm(compoundFrequency, years);
  const apr = annualPercentageRate(interestRate, compoundFrequency);
  const future = futureValue(apr);
  const raised = raiseToPower(future, term);
  return +(principal * raised).toFixed(2);
};

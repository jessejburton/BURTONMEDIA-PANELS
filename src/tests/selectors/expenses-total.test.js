import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const response = selectExpensesTotal([]);
  expect(response).toEqual(0);
});

test('Should correctly return value of one expense', () => {
  const response = selectExpensesTotal([expenses[1]]);
  expect(response).toEqual(109500);
});

test('Should correctly return sum of multiple expenses', () => {
  const response = selectExpensesTotal(expenses);
  expect(response).toEqual(114195);
});

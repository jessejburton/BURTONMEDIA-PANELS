import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('Should render ExpenseSummary with multiple expenses.', () => {
  const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseSummary with one expense.', () => {
  const wrapper = shallow(<ExpenseSummary expenses={[0]} />);
  expect(wrapper).toMatchSnapshot();
});

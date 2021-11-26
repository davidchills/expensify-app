
import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses.js'
import ExpenseListItem from '../../components/ExpenseListItem.js'

test('should render ExpenseListItem correctly', () => {
	const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />)
	expect(wrapper).toMatchSnapshot()
})

import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList.js'
import expenses from '../fixtures/expenses.js'
//import { exportAllDeclaration } from '@babel/types'

test('should render ExpenseList with expenses', () => {
	const wrapper = shallow(<ExpenseList expenses = { expenses } />)
	expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
	const wrapper = shallow(<ExpenseList expenses = { [] }/>)
	expect(wrapper).toMatchSnapshot()
})
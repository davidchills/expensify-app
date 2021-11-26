
import { exportAllDeclaration } from '@babel/types'
import moment from 'moment'
import selectExpenses from '../../selectors/expenses.js'
import expenses from '../fixtures/expenses.js'

const filters = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}	

test('should filter by text value', () => {
	const localFilters = { ...filters, text: 'e' }
	const result = selectExpenses(expenses, localFilters)
	expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by startDate', () => {
	const localFilters = { ...filters, startDate: moment(0) }
	const result = selectExpenses(expenses, localFilters)
	expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by endDate', () => {
	const localFilters = { ...filters, endDate: moment(0).add(2, 'days') }
	const result = selectExpenses(expenses, localFilters)
	expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', () => {
	const localFilters = { ...filters }
	const result = selectExpenses(expenses, localFilters)
	expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test ('should sort by amount', () => {
	const localFilters = { ...filters, sortBy: 'amount' }	
	const result = selectExpenses(expenses, localFilters)
	expect(result).toEqual([expenses[1], expenses[2], expenses[0]])		
})




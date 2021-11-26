
import expensesReducer from '../../reducers/expenses.js'
import expenses from '../fixtures/expenses.js'

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual([])
})

test('should remove expense by id', () => {
	const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id }
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
	const action = { type: 'REMOVE_EXPENSE', id: '-1' }
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})

test('should add an expense', () => {
	const expense = {
		id: '109',
		description: 'Laptop',
		note: '',
		amount: 29500,
		createdAt: 20000
	}
	const action = { type: 'ADD_EXPENSE', expense }
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
	const amount = 122000
	const action = { 
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: { amount: amount }
	}
	const state = expensesReducer(expenses, action)
	expect(state[1].amount).toBe(amount)
})

test('should not edit an expense if ID not found', () => {
	const amount = 122000
	const action = { 
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: { amount: amount }
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[1]]
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([expenses[1]])
})




/*
const expensesReducerDefaultState = []
export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense]
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id)
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return { ...expense, ...action.updates }
				}
				else { return expense }
			})
		default:
			return state
	}
}
*/
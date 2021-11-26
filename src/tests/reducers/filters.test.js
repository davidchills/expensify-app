
import moment from 'moment'
import filtersReducer from '../../reducers/filters.js'

test('should set up default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	})
})

test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
	expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	}
	const action = { type: 'SORT_BY_DATE' }
	const state = filtersReducer(currentState, action)
	expect(state.sortBy).toBe('date')
})

test('should set text filer', () => {
	const text = 'This is my filter'
	const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: text })
	expect(state.text).toBe(text)	
})

test('should set startDate filter', () => {
	const testMoment = moment()
	const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: testMoment })
	expect(state.startDate).toEqual(testMoment)
})

test('should set endDate filter', () => {
	const testMoment = moment()
	const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: testMoment })
	expect(state.endDate).toEqual(testMoment)
})

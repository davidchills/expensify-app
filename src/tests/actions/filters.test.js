
import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters.js'

test('should generate set text filter action object with text value', () => {
	const text = 'Something in'
	const action = setTextFilter(text)
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: text
	})
})

test('should generate set text filter action object with default', () => {
	const action = setTextFilter()
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	})
})

test('should generate sort by date action object', () => {
	expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate sort by amount action object', () => {
	expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should generate set start date action object', () => {
	const testMoment = moment(0)
	const action = setStartDate(testMoment)
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: testMoment
	})
})

test('should generate set end date action object', () => {
	const testMoment = moment(0)
	const action = setEndDate(testMoment)
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: testMoment
	})
})

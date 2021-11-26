
import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters.js'

export class ExpenseListFilters extends React.Component {

	state = {
		calendarFocused: null
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate)
		this.props.setEndDate(endDate)
	}

	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused: calendarFocused }))
	}

	onTextChange = (evt) => {
		this.props.setTextFilter(evt.target.value)
	}

	onSortChange = (evt) => {
		if (evt.target.value === 'date') { this.props.sortByDate() }
		else if (evt.target.value === 'amount') { this.props.sortByAmount() }		
	}

	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input 
							type="text" 
							className="text-input" 
							placeholder="Search Expenses" 
							value={ this.props.filters.text } 
							onChange={ this.onTextChange } 
						/>				
					</div>
					<div className="input-group__item">
						<select className="select" value={  this.props.filters.sortBy } onChange={ this.onSortChange }>	
						<option value="date">Date</option>
						<option value="amount">Amount</option>
						</select>						
					</div>
					<div className="input-group__item">
						<DateRangePicker
						startDate={ this.props.filters.startDate }
						startDateId={ 'startDateId' }
						endDate={ this.props.filters.endDate }
						endDateId={ 'endDateId' }
						onDatesChange={ this.onDatesChange }
						focusedInput={ this.state.calendarFocused }
						onFocusChange={ this.onFocusChange }
						showClearDates={ true }
						numberOfMonths={ 1 }
						isOutsideRange={ () => false }
						/>				
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({ filters: state.filters })

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
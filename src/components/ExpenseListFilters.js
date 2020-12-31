/* eslint-disable react/prop-types */
import 'react-dates/initialize';
import React from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	sortbyAmount,
	sortbyDate,
	setStartDate,
	setEndDate,
} from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';


class ExpenseListFilters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarFocused: null,
		};
	}
	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={(e) => {
						this.props.dispatch(setTextFilter(e.target.value));
					}}
				/>

				<select
					value={this.props.filters.sortBy}
					onChange={(e) => {
						console.log('selected value', e.target.value);
						// if(e.target.value==='amount')
						// {
						//     props.dispatch(sortbyAmount());
						// }
						// else if(e.target.value==='date')
						// {
						//     props.dispatch(sortbyDate());
						// }
						switch (e.target.value) {
							case 'amount':
								//console.log('amount selected in dropdown');
								this.props.dispatch(sortbyAmount());
								break;
							case 'date':
								//console.log('date selected in dropdown');
								//console.log(e);
								this.props.dispatch(sortbyDate());
								break;
						}
					}}
				>
					<option value="amount">Amount</option>
					<option value="date">Date</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					startDateId="abasdhwkhqkeqw"
					endDateId="vbbvzbzbxcvzx"
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

// const updateStateTextFilter=(e)=>{
//     store.dispatch(setTextFilter(e.target.value));
// }

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);

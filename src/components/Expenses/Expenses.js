import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map((item, key) => 
                <ExpenseItem key={key} title={item.title} date={item.date} amount={item.amount} />
            )}
        </Card>
    )
}

export default Expenses;
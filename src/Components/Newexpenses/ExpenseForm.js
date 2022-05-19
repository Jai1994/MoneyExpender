import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props)=>{
  const [EnteredTitle, setEnteredTitle] = useState('');
  const [EnteredAmount, setEnteredAmount] = useState('');
  const [EnteredDate, setEnteredDate] = useState('');

     const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
     };

     const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
     };

     const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
     };

     const submitHandler = (event) =>{
            event.preventDefault();

            if(!EnteredTitle || !EnteredAmount||!EnteredDate){
                 
                alert("please fill the required information...");
                return ;
            }

            const expenseData = {
                title: EnteredTitle,
                amount: EnteredAmount,
                date : new Date(EnteredDate)

            }

            props.onSaveExpensesData(expenseData);

            console.log(expenseData);

            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
     }

    return(
    <form onSubmit={ submitHandler }>
       <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input type="text" value={EnteredTitle} onChange={ titleChangeHandler} />
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input type="number" value={EnteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler } />
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input type="date" value={EnteredDate} onChange={dateChangeHandler} />
            </div>
       </div>

       <div className='new-expense__actions'>
           <button type='submit'>Add Expense</button>
       </div>
    </form>
    );
}

export default ExpenseForm;

import React from "react";
import './Newexpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) =>{
   
        const saveExpensesDataHandler = (enteredExpenseData) =>{
             const expenseData = {
                 ...enteredExpenseData,
                 id: Math.random().toString()
             };
             props.onAddExpense(expenseData);
            console.log(expenseData);

        };
    

    return(
        <div className="new-expense">
           
           <ExpenseForm onSaveExpensesData ={
               saveExpensesDataHandler} />

        </div>
    );
}

export default NewExpenses;
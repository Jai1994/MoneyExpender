import React, {useEffect, useState} from "react";

// import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
 import NewExpenses from './Components/Newexpenses/NewExpenses'


 let Dummy_expenses = [];
let App =()=>{

  const [expenses, setExpenses] =useState( Dummy_expenses);
      
     useEffect(()=>{

      fetch('http://localhost/sample-api/api/read.php').then(
      response =>{
        return response.json();
      }
    ).then(
      data =>{
        // console.log(data);
        setExpenses(data);
      }
    );
     },[]);
       const addExpenseHandler = (expense) =>{
       const updatedExpense = [expense, ...expenses];
       setExpenses(updatedExpense);
   };

    return ( <div className="app-container"> 
         <NewExpenses onAddExpense={ addExpenseHandler} />
       <Expenses item ={expenses} />
    </div>
    );
}

export default App;
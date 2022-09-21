import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'House Rent',
        amount: 225000,
        date: new Date(2020, 7, 14)
    }, {
        id: 'e2',
        title: 'Child Support',
        amount: 200000,
        date: new Date(2021, 2, 12)
    }, {
        id: 'e3',
        title: 'Agua & Electricity',
        amount: 25000,
        date: new Date(2021, 2, 28)
    }, {
        id: 'e4',
        title: 'Internet & Mobile',
        amount: 40000,
        date: new Date(2021, 5, 12)
    },
    {
      id: 'e5',
      title: 'Supermarket',
      amount: 240000,
      date: new Date(2021, 5, 12)
  },
];
const App = () => {
    
    const [expenses, setExpenses ] = useState(DUMMY_EXPENSES);
    // ESCRIBIR y AGREGAR DATA AL DATA ARRAY 

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
      );
    
}

export default App;

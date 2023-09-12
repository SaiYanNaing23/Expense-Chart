import Expense from "./components/Expenses/Expense";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const Dummy_Expenses = [
  {
  id: "e1",
  title: "Toilet Paper",
  amount: 94.12,
  date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
  id: "e3",
  title: "Car Insurance",
  amount: 294.67,
  date: new Date(2021, 2, 28),
  },
  {
  id: "e4",
  title: "New Desk (Wooden)",
  amount: 450,
  date: new Date(2021, 5, 12),
  },
  ];

const App = () => {
  const [expenses,setExpenses] = useState(Dummy_Expenses)
  const onAddExpenseHandler = (addExpense) =>{
    setExpenses((expenses)=>[
      addExpense,
      ...expenses
    ])
  }
  return (
    <Card className="expenses" >
      <NewExpense onAddExpense = {onAddExpenseHandler} />
      <Expense items={expenses}/>
    </Card>
  );
}

export default App;
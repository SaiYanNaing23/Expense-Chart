import ExpenseItem from "./ExpenseItem"
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
const Expense = ({expenses}) => {
  const [filter,setFilter] = useState("")
  const onFilterYearHandler= (filterYear)=>{
    setFilter(filterYear);
    console.log(filter)
  }
  return (
    <div>
      <ExpenseFilter filterYear={filter} onFilterYear = {onFilterYearHandler} />
        <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
        <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}/>
        <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}/>
        <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}/>
    </div>
  )
}

export default Expense
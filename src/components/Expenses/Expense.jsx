import ExpenseItem from "./ExpenseItem"
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
const Expense = (props) => {
  const [filter,setFilter] = useState("")
  const onFilterYearHandler= (filterYear)=>{
    setFilter(filterYear);
    console.log(filter)
  }
  return (
    <div>
      <ExpenseFilter filterYear={filter} onFilterYear ={onFilterYearHandler} />
      {props.items.map((expense)=>(
        <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />
      ))}
    </div>
  )
}

export default Expense;
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState("")
    const [dateVal,setDateVal] = useState("")

    const titleHandler= (e)=>{
        setTitle(e.target.value)
    }
    const amountHandler= (e)=>{
        setAmount(e.target.value)
    }
    const dateHandler= (e)=>{
        setDateVal(e.target.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        const expense = {
            id : "el1",
            title,
            amount,
            date : new Date(dateVal)
        }
        props.onSaveExpense(expense)
        setTitle("")
        setAmount("")
        setDateVal("")
    }
  return (
    <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title} onChange={titleHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amount} min="0.01" step="0.01" onChange={amountHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={dateVal} min="2020-01-01" step="2022-7-23" onChange={dateHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
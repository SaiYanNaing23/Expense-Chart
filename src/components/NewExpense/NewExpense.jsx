import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const onSaveExpenseHandler = (newExpense) =>{
        const newExpenseObj = {
            ...newExpense,
            id : Math.random().toString()
        }
        props.onAddExpense(newExpenseObj)
    }
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpense = {onSaveExpenseHandler} />
    </div>
  )
}

export default NewExpense
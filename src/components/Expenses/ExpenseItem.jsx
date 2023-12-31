import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const [title,setTitle] = useState(props.title)
  return (
    <Card className="expense-item">
        <div>
            <ExpenseDate date={props.date}/>
        </div>
        <div>
            <h2 className="expense-item__description">{props.title}</h2>
            <div className="expense-item__price">{props.amount}$</div>
        </div>
    </Card>
  )
}

export default ExpenseItem;


import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'; 
import Card from '../UI/Card'; 
import './ExpenseItem.css';

const ExpenseItem = ({props}) => {
  
  const DelHandler = () => {
    console.log('Clicked Delete');
  };

  return (
    <Card className='expense-item'>
     <ExpenseDate date={props.date}/>
     <ExpenseDetails title={props.title} amount={props.amount}/>
    <button onClick={DelHandler}>Delete</button>
    </Card>  
  );  
}  

export default ExpenseItem;

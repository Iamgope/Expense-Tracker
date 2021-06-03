import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(inputExpenseData)=>{
           const ExpenseData={
               ...inputExpenseData,

               id: Math.random().toString()
           };
           //console.log(ExpenseData);
           
           props.onAddExpense(ExpenseData);
    };

  return (
  <div className="new-expense">
   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
  );
}
export default NewExpense;
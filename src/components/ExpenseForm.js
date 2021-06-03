import React ,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
  const [userInput,setUserInput]=useState({
      inputTitle :'',
      inputAmount:'',
      inputDate:'',
  });

  const [layout,setLayout]=useState(false);

  const amountChangeHandler=(event)=>{
    setUserInput((prevState)=>{
        return {...prevState,inputAmount:event.target.value};
    });
    ///console.log(event.target.value);
  }
  const titleChangeHandler=(event)=>{
    setUserInput((prevState)=>{
        return {...prevState,inputTitle:event.target.value};
    });
    //console.log(event.target.value);

  }
  const dateChangeHandler=(event)=>{
    setUserInput((prevState)=>{
        return {...prevState,inputDate:event.target.value};
    });
    //console.log(event.target.value);
  
  }
const formSubmitHandler=(event)=>{
    event.preventDefault();
    //console.log(userInput);
    const expenseData={
        title: userInput.inputTitle,
        amount: +userInput.inputAmount,
        date: new Date(userInput.inputDate),
    }
    setUserInput({
        inputAmount:'',
        inputDate:'',
        inputTitle:''
    })
    //expenseData.inputDate=new Date(expenseData.inputDate);
   // console.log(expenseData)
   props.onSaveExpenseData(expenseData);
   setLayout(false);
   
}
const layoutButtonHandler=()=>{
    //event.preventDefault();
    //console.log(event);
    setLayout(true);
}
  if(layout===false){
      return(
        <div className="new-expense__actions">
          <button onClick={layoutButtonHandler}>
            Add new Expense
          </button>
          </div>
      )
  }
  
  
   return(
       <form onSubmit={formSubmitHandler}>
           <div className="new-expense__controls">
           <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={userInput.inputTitle}/>
           </div>

           <div className="new-expense__control">
            <label>Amount</label>
            <input type="number"   onChange={amountChangeHandler} value={userInput.inputAmount}/>
           </div>

           <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2018-01-01" max="2029-01-01" onChange={dateChangeHandler} value={userInput.inputDate}/>
           </div>

           </div>
           <div className="new-expense__actions">
             <button type="submit">Cancel</button>

               <button type="submit">Add Expense</button>
           </div>
       </form>
   )
}
export default ExpenseForm;
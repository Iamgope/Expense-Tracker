import {useState} from 'react'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'

const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'BOOK (Kafka on the shore)',
    amount: 500,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e6',
    title: 'Bedsheets',
    amount: 200,
    date: new Date(2020, 10, 8),
  },
  {
    id: 'e7',
    title: 'Utensils',
    amount: 620,
    date: new Date(2019, 10, 11),
  },
  {
    id: 'e8',
    title: 'Plants(Flower)',
    amount: 244,
    date: new Date(2020, 0, 11),
  },
  {
    id: 'e9',
    title: 'Room Rent',
    amount: 610,
    date: new Date(2020, 1, 1),
  },
];
function App() {
  const [expenses,setExpenses]=useState(dummyData);

  const addExpenseHandler=(expense)=>{
   console.log("App.js hai ye");
   console.log(expense)
    
   // console.log(ExpenseVal);
    setExpenses((prevState)=>{
     
      return [expense,...prevState];
    })
  }

  

  return(
   <>

      <NewExpense onAddExpense={addExpenseHandler}/>

       <Expenses expenses={expenses}/>

   </>
  )
}

export default App;

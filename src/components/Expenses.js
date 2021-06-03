import React,{useState} from 'react'
import './Expenses.css'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart';
const Expenses=(props)=>{
     const [filterYear,setFilterYear]=useState('2020');

    const changeYearHandler=(year)=>{
      setFilterYear(year);
    }
    const FilteredExpense=props.expenses.filter((expense)=>
       {
         const year=expense.date.getFullYear();
         return( String(year)===String(filterYear));
         //console.log(year,{filterYear});
       }
    )

    
   //console.log(filterYear)
   //const year=props.expenses[0].date.getFullYear()
   //console.log(year);
      return (
        <Card className="expenses">
          <div>
          <ExpensesFilter
          year={filterYear}
           onChangeYear={changeYearHandler}
           
          />
          </div>
         <ExpensesChart
         expenses={FilteredExpense}
         />
        <ExpenseList items={FilteredExpense}/>
        </Card>
      );
}

export default Expenses
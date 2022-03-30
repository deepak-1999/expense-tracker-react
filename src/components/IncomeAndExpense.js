import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeAndExpense = props => {
 const {transactions} = useContext(GlobalContext)
 let transactionMap = {income : 0, expense : 0, savings : 0}
 transactions.map((transaction) => {transactionMap[transaction.tag]+=transaction.amount})
 return <>
  <div className="inc-exp-container" style={{dispaly:'flex'}}>
  <div>
   <h4>INCOME</h4>
   <p className={"money income"}>{transactionMap['income'].toFixed(2)}</p>
  </div>
   <div>
    <h4>EXPENSE</h4>
    <p className="money expense">{Math.abs(transactionMap['expense']).toFixed(2)}</p>
   </div>
   <div>
    <h4>SAVINGS</h4>
    <p className="money savings">{Math.abs(transactionMap['savings']).toFixed(2)}</p>
   </div>
 </div>
 </>

}

export default IncomeAndExpense
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { EXPENSE, INCOME, SAVINGS } from '../utils/projConstants'

const QuickInfo = () => {
  const {transactions} = useContext(GlobalContext)
  const [transactionMap , setTransactionMap] = useState({ income: 0, expense: 0, savings: 0 })
  useEffect(() => {
    let updatedTransactionMap = { income: 0, expense: 0, savings: 0 }
    transactions.map((transaction) => { updatedTransactionMap[transaction.tag] += transaction.amount })
    setTransactionMap({...updatedTransactionMap})
  }, [transactions])

  return (
    <>
     <h4>Your Balance </h4>
     <h1>${transactionMap[INCOME]-transactionMap[EXPENSE]-transactionMap[SAVINGS]}</h1>
    </>
  )
}

export default QuickInfo

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <li className={transaction.tag}>
     {transaction.text}
     <span>${Math.abs(transaction.amount)}</span>
      <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>X</button>
    </li>
  )
}

export default Transaction

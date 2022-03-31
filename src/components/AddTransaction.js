import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { EXPENSE, INCOME, SAVINGS } from '../utils/projConstants'

const AddTransaction = () => {
 const [text, setText]= useState('')
 const [amount, setAmount]= useState(0)
 const [checkBoxList, setCheckBoxList] = useState([false, false, false])
 const {addTransaction} = useContext(GlobalContext)
 const onSubmit = e => {
   e.preventDefault();
   const newTransaction = {
     id: Math.floor(Math.random() * 100000000),
     text,
     amount: +amount,
     tag: checkBoxList[0] ? INCOME : checkBoxList[1] ? EXPENSE : SAVINGS
   }
   addTransaction(newTransaction);
   setText('')
   setCheckBoxList([false, false, false])
   setAmount(0)
 }

  const checkBoxChange = (e) => {
    let tempCheckBoxList = [...checkBoxList]
    e.target.value === '0' ? setCheckBoxList([!tempCheckBoxList[0], false, false])
      : e.target.value === '1' ? setCheckBoxList([false, !tempCheckBoxList[1], false])
        : setCheckBoxList([false, false , !tempCheckBoxList[2]])
  }
  return (
    <>
      <h3>Add Transaction</h3>
      <div>
       <div className= "form-control">
        <label htmlFor="text">Text</label>
        <input type={'text'} value={text} onChange= {(e) => setText(e.target.value)} placeholder="Enter text"/>
       </div>
       <div className='form-control'>
        <label htmlFor='amount'>
         Amount 
         <br/>
         (negative - expense, positive - income)
        </label>
      <input type={'number'} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
       </div>
        <input type={'checkbox'} value={'0'} checked={checkBoxList[0]} onChange={checkBoxChange} />
        <label>{INCOME}</label>
        <input type={'checkbox'} value={'1'} checked={checkBoxList[1]} onChange={checkBoxChange} />
        <label>{EXPENSE}</label>
        <input type={'checkbox'} value={'2'} checked={checkBoxList[2]} onChange={checkBoxChange} />
        <label>{SAVINGS}</label>
      </div>
       <button className='btn' onClick={onSubmit} 
       disabled = {text ==='' || amount === 0 || (!checkBoxList[0] && !checkBoxList[1] && !checkBoxList[2])}>Add Transaction </button>
      <div>
      </div>
    </>
  )
}

export default AddTransaction

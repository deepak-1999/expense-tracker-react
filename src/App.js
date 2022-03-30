import {React} from 'react';
import Header from './components/Header';
import IncomeAndExpense from './components/IncomeAndExpense';
import QuickInfo from './components/QuickInfo';
import TransactionList from './components/TransactionList';


import './App.css';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalContext';


function App() {
  return (<GlobalProvider>
    <Header />
    <div className='container'>
    <QuickInfo
      balance={35000}
      savings={12000}
    />
    <IncomeAndExpense
    income={50000}
    expense={15000}/>
    <TransactionList />
    <AddTransaction />
    </div>
  </GlobalProvider>
)}

export default App;

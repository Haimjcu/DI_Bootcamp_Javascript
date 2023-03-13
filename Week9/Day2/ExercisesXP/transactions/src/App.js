import React from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Financial Transactions</h1>
        <div>
          <TransactionForm />
          <TransactionList />
        </div>
      </div>
    );
  }
}

export default App;

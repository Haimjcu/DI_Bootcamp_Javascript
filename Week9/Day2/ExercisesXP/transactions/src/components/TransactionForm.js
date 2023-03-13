import React from "react";
import {connect} from 'react-redux';
import {insert, update} from '../actions/transactionActions';

const TransactionForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.currentIndex>0 ? props.update(e.target) : props.insert(e.target);
      }


    return (
        <form onSubmit={handleSubmit}>
            {props.currentIndex>0 ? 
                (props.transactions.filter( x => x.index===props.currentIndex).map( (tran) => (
                <>
                <input name="bAccountNo" placeholder="Account Number" value={tran.bAccountNo} /><br />
                <input name="FSC" placeholder="FSC" value={tran.FSC} /><br />
                <input name="bName" placeholder="A/C Holder Name" value={tran.bName} /><br />
                <input name="amount" placeholder="Amount" value={tran.amount} /><br />
                </>                
                ))
            )
            : (
                <>
                <input name="bAccountNo" placeholder="Account Number" /><br />
                <input name="FSC" placeholder="FSC" /><br />
                <input name="bName" placeholder="A/C Holder Name" /><br />
                <input name="amount" placeholder="Amount" /><br />
                </>
            )
            }

            <button type="submit">Submit</button>
        </form>
    )
}

const mapStateToProps = (state) =>{
    return {
        currentIndex: state.currentIndex,
        transactions: state.list
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      insert: (e) =>dispatch(insert(e)),
      update: (e) =>dispatch(update(e))
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm);
import React from "react";
import {connect} from 'react-redux';
import {deleteId, updateIndex} from '../actions/transactionActions';

const TransactionList = (props) => {
    console.log('dd' + props.transactions.length);
    return (
        <table>
            <tbody>
                {props.transactions.length>0 ?
                (props.transactions.map((tran) => (
                    <tr key={tran.index}>
                        <td>{tran.bAccountNo}</td>
                        <td>{tran.FSC}</td>
                        <td>{tran.bName}</td>
                        <td>{tran.amount}</td>
                        <td><button onClick={()=>props.updateIndex(tran.index)}>Edit</button></td>
                        <td><button onClick={()=>props.deleteId(tran.index)}>Delete</button></td>
                    </tr>
                ))
                ) : ""
                }
            </tbody>
        </table>
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
        deleteId: (id) =>dispatch(deleteId(id)),
        updateIndex: (id) =>dispatch(updateIndex(id))
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList);
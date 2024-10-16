import React, { Component } from 'react'
import './ExpenseItem.css'
import { MdEdit,MdDelete } from 'react-icons/md'

export class ExpenseItem extends Component {
    render() {
      return (
        <li className='item'>
          <div className='info'>
            <span className='expense'>{this.props.expense.charge}</span> {/* ExpenseList에서 전달된 데이터를 받아 출력 */}
            <span className='amount'> {this.props.expense.amount}</span>
          </div>
          <div>
            <button className='edit-btn'><MdEdit /></button>
            <button className='clear-btn' 
              onClick={() => this.props.handleDelete(this.props.expense.id)}  // 수정: 함수를 호출하면서 id 전달
            >
              <MdDelete />
            </button>
          </div>
        </li> 
      )
    }
}

export default ExpenseItem
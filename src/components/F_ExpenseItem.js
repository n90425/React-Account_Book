import React, { Component } from 'react'
import './ExpenseItem.css'
import { MdEdit,MdDelete } from 'react-icons/md'

const F_ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
      return (
        <li className='item'>
          <div className='info'>
            <span className='expense'>{expense.charge}</span> {/* ExpenseList에서 전달된 데이터를 받아 출력 */}
            <span className='amount'> {expense.amount}</span>
          </div>
          <div>
            <button className='edit-btn'
              onClick={() => handleEdit(expense.id)}
            >
              <MdEdit />
            </button>
            <button className='clear-btn' 
              onClick={() => handleDelete(expense.id)}  // 수정: 함수를 호출하면서 id 전달
            >
              <MdDelete />
            </button>
          </div>
        </li> 
      )
}

export default F_ExpenseItem
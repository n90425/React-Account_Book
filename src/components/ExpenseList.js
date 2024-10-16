import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpenses) //props를 이용해 App.js에서 넘겨준 데이터를 받아 줌
    return (
      <>
        <ul className='list'>
            {/* ExpenseItem */}
            {this.props.initialExpenses.map(expense => {    //위에서 받은 데이터를 map에 담아서 ExpenseItem에 넘겨줌 
                return (
                    <ExpenseItem 
                        expense={expense} 
                        key={expense.id}    //JSX의 key속성을 사용(index는 비추) // 유니크한 키를 줘서 에러를 잡아 줌
                        handleDelete={this.props.handleDelete}  //ExpenseList에서 넘겨준 함수를 받아 줌
                    />
                )
            })}
        </ul>
        <button className='btn'>
            목록 지우기
            <MdDelete className='btn-icon' />
        </button>
      </>
    )
  }
}

export default ExpenseList
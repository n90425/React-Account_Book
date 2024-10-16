import React from 'react'
import './ExpenseList.css'
import F_ExpenseItem from './F_ExpenseItem'
import { MdDelete } from 'react-icons/md'

const F_ExpenseList = ({handleDelete, expenses, handleEdit, clearItems}) => {
    // console.log(initialExpenses) //props를 이용해 App.js에서 넘겨준 데이터를 받아 줌
    return (
      <>
        <ul className='list'>
            {/* ExpenseItem */}
            {expenses.map(expense => {    //위에서 받은 데이터를 map에 담아서 ExpenseItem에 넘겨줌 
                return (
                    <F_ExpenseItem 
                        expense={expense} 
                        key={expense.id}    //JSX의 key속성을 사용(index는 비추) // 유니크한 키를 줘서 에러를 잡아 줌
                        handleDelete={handleDelete}  //ExpenseList에서 넘겨준 함수를 받아 줌
                        handleEdit={handleEdit}
                    />
                )
            })}
        </ul>
        {expenses.length > 0 && (
            <button className='btn' onClick={clearItems}>
                목록 지우기
                <MdDelete className='btn-icon' />
            </button>
        )}
      </>
    )
}

export default F_ExpenseList
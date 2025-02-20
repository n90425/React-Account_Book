import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import F_ExpenseForm from "./components/F_ExpenseForm";
import F_ExpenseList from "./components/F_ExpenseList";

const F_App = () => {

//   constructor(props) {  
//     super(props);
//     this.state = {
//       expense: [
//         { id: 1, charge: "렌트비", amount: 1600},
//         { id: 2, charge: "교통비", amount: 400},
//         { id: 3, charge: "식비", amount: 1200}
//       ]
//     }
//   }  클래스형을 아래 함수형으로 수정

  const [charge, setCharge] = useState("");

  const [id, setId] = useState('');

  const [edit, setEdit] = useState(false);

  const [amount, setAmount] = useState(0);

  const [alert, setAlert] = useState({show: false});

  const [expenses, setExpenses] = useState([])

  const clearItems = () => {
    setExpenses([]);
  }

  const handleCharge = (e) => {
    // console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  }

  const handleDelete = (id) => {    //함수도 props를 사용하여 넘겨 줄 수 있음
    const newExpenses = expenses.filter(expense => expense.id != id)  //filter메소드 사용하여 목록 삭제
    console.log(newExpenses);
    setExpenses(newExpenses);
    handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.'});
  };

  const handleAlert = ({ type, text}) => {
    setAlert({ show: true, type, text});
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  }

  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id); 
    const { charge, amount} = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(charge !== "" && amount > 0) {
      if(edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount : amount } : item
        })

        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type: 'success', text: "아이템이 수정되었습니다."})
      } else {
        const newExpense = {id: crypto.randomUUID(), charge, amount}
        // 블변성을 지켜주기 위해서 새로운 expenses를 생성
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다."});
      }
      setCharge("");
      setAmount(0); 
    } else {
      console.log('error');
      handleAlert({
        type: 'danger',
        text: 'charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다.'
      })
      }
    }
  

    return (
      <main className="main-container">
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1>예산 계산기</h1>

        <div style={{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
          {/* Expense Form */}
          <F_ExpenseForm 
            handleCharge={handleCharge}
            charge={charge}
            handleAmount={handleAmount}
            amount={amount}
            handleSubmit={handleSubmit}
            edit={edit}
          />
        </div>

        <div style={{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
          {/* Expense List */}
          <F_ExpenseList 
            //initialExpenses={this.initialExpenses}  //위에 initialExpenses를 받아서 넘겨 줌 
            expenses={expenses}
            handleDelete={handleDelete}        //위 삭제 함수를 받아서 넘겨줌
            handleEdit={handleEdit}
            clearItems={clearItems}
            />  

        </div>

        <div style={{ display: 'flex', justifyContent:'end', marginTop:'1rem'}}>
          <p style={{fontSize:'2rem'}}>
            총지출:
            <span>{expenses.reduce((acc, curr) =>{   //reduce메서드를 사용하여 총합을 계산해 줌
              return (acc += curr.amount)
            }, 0)}
              원
            </span>
          </p>

        </div>
      </main>
    )
}

export default F_App;
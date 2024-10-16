import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component{

// props랑 state 차이
// props: 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터를 전달하는 방법 / 읽기 전용
// state: 해당 컴포넌트 내부에서 데이터를 전달함 / 쓰기 가능 / 변겨오디면 re-render된다



  // initialExpenses = [   /*props를 사용해서 ExpenseList에 념겨 줄 것*/
  //   { id: 1, charge: "렌트비", amount: 1600},
  //   { id: 2, charge: "교통비", amount: 400},
  //   { id: 3, charge: "식비", amount: 1200}
  // ]   

  // 바로 위 배열을 생성자 생성해서 state안에 담아줌
  constructor(props) {  //생성사 생성 
    super(props);
    this.state = {
      expense: [
        { id: 1, charge: "렌트비", amount: 1600},
        { id: 2, charge: "교통비", amount: 400},
        { id: 3, charge: "식비", amount: 1200}
      ]
    }
  }

  handleDelete = (id) => {    //함수도 props를 사용하여 넘겨 줄 수 있음
    const newExpenses = this.state.expense.filter(expense => expense.id != id)  //filter메소드 사용하여 목록 삭제
    console.log(newExpenses);
    this.setState({ expense: newExpenses});  //filter로 삭제해주고 setState로 다시 넣어줌
  };

  render(){
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
          {/* Expense Form */}
          <ExpenseForm />
        </div>

        <div style={{ width:'100%', backgroundColor:'white', padding:'1rem'}}>
          {/* Expense List */}
          <ExpenseList 
            //initialExpenses={this.initialExpenses}  //위에 initialExpenses를 받아서 넘겨 줌 
            initialExpenses={this.state.expense}
            handleDelete={this.handleDelete}        //위 삭제 함수를 받아서 넘겨줌
            />  

        </div>

        <div style={{ display: 'flex', justifyContent:'end', marginTop:'1rem'}}>
          <p style={{fontSize:'2rem'}}>
            총지출:
            <span>원</span>
          </p>

        </div>
      </main>
    )
  }
}

export default App;
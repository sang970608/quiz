import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import arrow from './right-arrow.png';

function Head() {
  return(
    <div>
      <div className="subHead">
        디자이너스 OX퀴즈
      </div>
      <div className="mainHead">
        <span className="o">O</span>
        <span className="x">X</span>
        <span className="q">퀴</span>
        <span className="z">즈</span>
      </div>
    </div>
  )
}

function Quiz({id, nameX, question}){
  return (
  <div>
    Q{id}. {question}
    <div className="OX">
      <label for={id}>
      <input type="radio" id={id} value="O" name={id} />
      <div className="correct">O</div></label>
      <div className="line"></div>
      <label for={nameX}>
      <input type="radio" id={nameX} value="X" name={id} />
      <div className="incorrect">X</div></label>
    </div>
  </div>
  )
}

function Ques() {
  const questions = [{
    id: 1,
    nameX: 6,
    question: "같은 양의 음식이라면 하루 3번 이상 최대한 여러번 나눠서 먹는 것이 다이어트에 더 효과적이다.",
    correct: "O"
  },{
    id: 2,
    nameX: 7,
    question: "아침식사를 거르면 오히려 체지방이 더 축적된다.",
    correct: "O"
  },{
    id: 3,
    nameX: 8,
    question: "저녁식사는 무조건 저녁 6~7시 이전에 끝내야 한다.",
    correct: "O"
  },{
    id: 4,
    nameX: 9,
    question: "음식은 최소 20분 이상 천천히 씹어 먹어야 한다.",
    correct: "O"
  },{
    id: 5,
    nameX: 10,
    question: "운동과 식욕억제제를 병행하면 다이어트에 큰 도움이 된다.",
    correct: "O"
  }]

  return(
    <div>
      <div className="ques">
        <div className="quiz">
          {questions.map(receive => {
            return(<div>
            <Quiz 
              question={receive.question}
              id={receive.id}
              nameX={receive.nameX} />
            <value_check
              question={receive.question}
              correct={receive.correct}
               />
               </div>)}
            )
          }
        </div>
      </div>
      <div className="next">
        <button className="enter" onClick="value_check()"><Link to="/Result"><strong className="enterBtn">결과확인</strong> 
        <img src={arrow} alt="Next" title="Next" className="arrow" /></Link></button>
        <Switch>
          <Route path="/result"><Result /></Route>
        </Switch>
      </div>
    </div>
  )
}

function value_check({question, correct}) {
  let sum = 0;
  for (let i=0; i<question.length;i++){
    if (document.getElementsByName(i+1).value == {correct})
      sum += 20;  
  }
}

function Result() {
  const score =70;
  return(
    <div>
      <div className="subHead">
        디자이너스 OX 퀴즈
      </div>
      <div className="score">
        {score}점
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="body">
        <Head />
        <Ques />
      </div>
    </div>
  );
}

export default App;

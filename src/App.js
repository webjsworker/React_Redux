import React from 'react';
import './App.css';
import Task_1 from './Component/Task_1/Task_1';
import Task_2 from './Component/Task_2/Task_2';
import { connect } from 'react-redux'
import Task_3 from './Component/Task_3/Task_3';
import { setCount } from './Component/Action/Action'
import Task_4 from './Component/Task_4/Task_4';
import { setCount_4 } from './Component/Action/Action'
import Task_5 from './Component/Task_5/Task_5';
import { setTime } from './Component/Action/Action'
import { setText } from './Component/Action/Action'
import { setWriteText } from './Component/Action/Action'
import { question_1, task_1, question_2, task_2, task_3, question_3,
   task_4, question_4, task_5, question_5,task_6,question_6 } from './Component/Answer/answer'
   import {setZero} from './Component/Action/Action'
import Task_6 from './Component/Task_6/Task_6';




const App = (props) => {
  return (
    <div className='App'>

      <div> <item className='item'> {task_1}</item> {question_1} </div>
      <Task_1 />
      <div><item className='item'> {task_2}</item> {question_2}</div>
      <Task_2
        name={props.name}
        year={props.year}
        sity={props.sity}
        contry={props.contry}
        namber={props.namber}
      />
      <div><item className='item'> {task_3}</item> {question_3} </div>
      <Task_3
        counter={props.counter}
        setCount={props.setCountAction}
      />
      <div><item className='item'>{task_4}</item>{question_4}  </div>
      <Task_4
        counter={props.counter}
        setCount={props.setCountAction_4}
        isFetching={props.isFetching}
        count_asinc={props.count_asinc}
      />
      <div><item className='item'>{task_5}</item> {question_5}  </div>
      <Task_5
        time={props.time}
        setTime={props.setTime}
        text={props.text}
        setText={props.setText}
        textwrite={props.textwrite}
        setWriteText={props.setWriteText}
        text_store={props.text_store}
        // time_store={props.time_store}
        setZero={props.setZero}
      />
      <div> <item className='item'> {task_6}</item> {question_6} </div>
      <Task_6/>
    </div>

  )

}
// mapStatetoProps указывает правила работы функции connect
const mapStatetoProps = store => {

  return {
    name: store.name,
    year: store.year,
    sity: store.adres.sity,
    contry: store.adres.contry,
    namber: store.namber,
    counter: store.counter,
    isFetching: store.isFetching,
    time: store.time,
    text: store.text,
    textwrite: store.textwrite,
    text_store: store.text_store,
    count_asinc: store.count_asinc
    // time_store:store.time_store,
  }
}

const mapDispatchToProps = dispatch => {

  return {
    //setCount_4: data => dispatch(setCount_4(data)),
    setCountAction: data => dispatch(setCount(data)),
    setCountAction_4: d => dispatch(setCount_4(d)),
    setTime: timeGO => dispatch(setTime(timeGO)),
    setText: text => dispatch(setText(text)),
    setWriteText: write => dispatch(setWriteText(write)),
    setZero: zero => dispatch(setZero(zero)),
  }
}
export default connect
  (mapStatetoProps,
    mapDispatchToProps
  )(App);

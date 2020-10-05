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
import { question_1, task_1, question_2, task_2,
   task_3, question_3, task_4, question_4, task_5, 
   question_5,task_6,question_6, task_7, question_7 ,
   content} from './Component/Answer/answer'
   import {setZero} from './Component/Action/Action'
import Task_6 from './Component/Task_6/Task_6';
import Task_7 from './Component/Task_7/Task_7'
import {setProgerss} from './Component/Action/Action'




const App = (props) => {
  return (
    <div className='App'>

      <div> <span className='item'> {task_1}</span> {question_1} </div>
      <Task_1 content={content} />
      <div><span className='item'> {task_2}</span> {question_2}</div>
      <Task_2
       content={content}
        name={props.name}
        year={props.year}
        sity={props.sity}
        contry={props.contry}
        namber={props.namber}
      />
      <div><span className='item'> {task_3}</span> {question_3} </div>
      <Task_3
        counter={props.counter}
        setCount={props.setCountAction}
      />
      <div><span className='item'>{task_4}</span>{question_4}  </div>
      <Task_4
        counter={props.counter}
        setCount={props.setCountAction_4}
        isFetching={props.isFetching}
        count_asinc={props.count_asinc}
      />
      <div><span className='item'>{task_5}</span> {question_5}  </div>
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
      <div> <span className='item'> {task_6}</span> {question_6} </div>
      <Task_6
      status={"Hello"}
      />
      <div><span className='item'>{task_7}</span>{question_7 } </div>
     {/* <Task_7
     progress={props.progress}
     setProgerss={props.setProgerss}
     isProgress={props.isProgress}
     s={props.s}
     /> */}
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
    count_asinc: store.count_asinc,
    progress: store.progress,

    isProgress: store.isProgress,
    s:store.s

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
    setProgerss: values => dispatch(setProgerss(values)),
  }
}
export default connect
  (mapStatetoProps,
    mapDispatchToProps
  )(App);

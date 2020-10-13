import React from 'react';
import { connect } from 'react-redux'
<<<<<<< HEAD
import './App.css';
import {
  Task_1, Task_2, Task_3, Task_4, Task_5, Task_6,
  Task_7, Task_8, Task_9
} from './Component/Import_App'
import {
  setCount, setCount_4, setTime,
  setText, setWriteText, setZero, setProgerss,
  setTimer
} from './Component/Action/Action'
=======
import Task_3 from './Component/Task_3/Task_3';
import { setCount } from './Component/Action/Action'
import Task_4 from './Component/Task_4/Task_4';
import { setCount_4 } from './Component/Action/Action'
import Task_5 from './Component/Task_5/Task_5';
import { setTime } from './Component/Action/Action'
import { setText } from './Component/Action/Action'
import { setWriteText } from './Component/Action/Action'
import {content} from './Component/Answer/answer'
   import {setZero} from './Component/Action/Action'
import Task_6 from './Component/Task_6/Task_6';
import Task_7 from './Component/Task_7/Task_7'
import {setProgerss} from './Component/Action/Action'
import {setTimer} from './Component/Action/Action'
import Task_8 from './Component/Task_8/Task_8'

>>>>>>> 4180fba552cd7e7d05ef610ee1732df9ebc1f8ce


const App = (props) => {
  return (
    <div className='App'>
<<<<<<< HEAD
      <Task_1 />
=======
      <Task_1 content={content} />
>>>>>>> 4180fba552cd7e7d05ef610ee1732df9ebc1f8ce
      <Task_2
        name={props.name}
        year={props.year}
        sity={props.sity}
        contry={props.contry}
        namber={props.namber}
      />
      <Task_3
        counter={props.counter}
        setCount={props.setCountAction}
      />
<<<<<<< HEAD
=======
      
>>>>>>> 4180fba552cd7e7d05ef610ee1732df9ebc1f8ce
      <Task_4
        counter={props.counter}
        setCount={props.setCountAction_4}
        isFetching={props.isFetching}
        count_asinc={props.count_asinc}
        Bt_value={props.Bt_value}
      />
<<<<<<< HEAD
=======
     
>>>>>>> 4180fba552cd7e7d05ef610ee1732df9ebc1f8ce
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
<<<<<<< HEAD
      <Task_6/>
      <Task_7
        progress={props.progress}
        setProgerss={props.setProgerss}
        isProgress={props.isProgress}
        timer_progress={props.timer_progress}
        setTimer={props.setTimer}
      />
      <Task_8 />
      <Task_9 />
=======
      
      <Task_6
      status={"Hello"}
      />
     
     <Task_7
     progress={props.progress}
     setProgerss={props.setProgerss}
     isProgress={props.isProgress}
     timer_progress={props.timer_progress}
     setTimer={props.setTimer}
     />
     
     <Task_8/>
>>>>>>> 4180fba552cd7e7d05ef610ee1732df9ebc1f8ce
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
    Bt_value: store.Bt_value,
    progress: store.progress,

    isProgress: store.isProgress,
    timer_progress: store.timer_progress

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
    setTimer: time => dispatch(setTimer(time)),



  }
}
export default connect
  (mapStatetoProps,
    mapDispatchToProps
  )(App);

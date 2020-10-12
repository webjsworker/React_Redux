import React from 'react'
import './Task_7.css'
import '../Answer/answer.css'
import { setProgerss } from '../Action/Action'
import { task_7, question_7 } from '../Answer/answer'
const Task_7 = (props) => {
  let timer = props.timer_progress
  let progress = props.progress
  let Handl = () => {
    let timerId = setInterval(function () {
      let time = new Date().getSeconds()
      let values = progress + 1
      props.setTimer(time)
    }, 1000)
  }
  return (
    <div className='task_7'>
      <div className='question'><span className='item'>{task_7}</span>{question_7} </div>
      <details>
        <summary>  </summary>
        <p onMouseOver={Handl}>Навести курсор мыши на строку для начала загррузки </p>
        <progress max="60" value={progress} >
          Загружено на <span id="value">25</span>%
  </progress>
        <span>loading ... </span>
        {/* <p>Таймер: {timer}</p> */}
      </details>
    </div>
  )
}
export default Task_7;


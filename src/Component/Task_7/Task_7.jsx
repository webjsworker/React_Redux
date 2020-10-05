import React from 'react'
import './Task_7.css'
import { setProgerss } from '../Action/Action'
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
      <details>
        <summary>  </summary>
        <p onMouseOver={Handl}>Навести курсор мыши на строку для начала загррузки </p>
        <progress max="60" value={ progress} >
          Загружено на <span id="value">25</span>%
  </progress>
   <span>loading ... </span>
        {/* <p>Таймер: {timer}</p> */}
      </details>
    </div>
  )
}
export default Task_7;

// let time = new Date().getSeconds().toLocaleTimeString()

    // let timerId = setInterval(function () {
    //   let values = props.progress + 10
      // props.setProgerss(values)
    //   if (values > 100) {
    //     clearTimeout(timerId)
    //   }

    // }, 1000);

    // for (var i = 0; i < 10; i++) {
    //   let values = props.progress + 10 
    //   props.setProgerss(values)
    //  setTimeout(() => console.log(values), 1000);
    // }

    // let time = new Date().toLocaleTimeString()
    // let count = 0 
    // let timerId = setInterval(function () {
    //   let values = props.progress + 10
    //   
    //  console.log(props.progress)

    // if (values > 100) {
    //   
    // }

    // }, 2000);
    // 
      // props.setProgerss(values)
      // if (props.progress > 100) {

      //   clearTimeout(timerId)
      // }
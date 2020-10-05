import React from 'react'
import './Task_7.css'
import { setProgerss } from '../Action/Action'
const Task_7 = (props) => {

  let Handl = () => {
    
      let values = props.progress + 10
      if (values>100){values = 100}
      props.setProgerss(values)
      // let count = 0 
      // let timerId = setInterval(function () {
      //   let values = props.progress + 10
      //   props.setProgerss(values)
      //  console.log(props.progress)
      
      // if (values > 100) {
      //   clearTimeout(timerId)
      // }

    // }, 2000);
  }

  return (
    <div className='task_7'>
      <details>
        <summary>  </summary>
        <p onMouseOver={Handl}>Навести курсор мыши на строку для начала загррузки </p>
        <progress max="100" value={props.progress} key={props.progress}>
          Загружено на <span id="value">25</span>%
  </progress> <span>{props.progress}</span>
      </details>

    </div>
  )
}
export default Task_7;



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
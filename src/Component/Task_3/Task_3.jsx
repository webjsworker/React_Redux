import React from 'react'
import './Task_3.css'

const Task_3 = (props) =>{
    
let onBtnClick=(e)=>{
    
       const data = props.counter + 1 ;
        props.setCount(data)
}

    return (
        <div className="task_3">
            Содержание ответа:
<p>Counter = {props.counter} </p>
            <p> <button onClick={onBtnClick}>Counter</button></p>
        </div>
    )
}
export default Task_3;
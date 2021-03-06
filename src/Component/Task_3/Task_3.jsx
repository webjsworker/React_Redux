import React from 'react'
import './Task_3.css'
import '../Answer/answer.css'
import { task_3, question_3 } from '../Answer/answer'

const Task_3 = (props) => {
    let onBtnClick = (e) => {
        const data = props.counter + 1;
        props.setCount(data)
    }
    return (
        <div className="task_3">
            <div className='question'><span className='item'> {task_3}</span> {question_3} </div>
            <details>
                <summary></summary>
                <p>Counter = {props.counter} </p>
                <p> <button onClick={onBtnClick}>Counter</button></p>
            </details>
        </div>
    )
}
export default Task_3;
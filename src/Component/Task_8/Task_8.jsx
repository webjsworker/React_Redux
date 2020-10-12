import React from 'react'
import './Task_8.css'
import '../Answer/answer.css'
import { task_8, question_8 } from '../Answer/answer'

const Task_8 = (props) => {
    return (
        <div className='task_8'>
            <div className='question'><span className='item'>{task_8}</span>{question_8} </div>
            <details>
                <summary>  </summary>
                <p>ОТвет</p>
            </details>

        </div>
    )
}
export default Task_8;
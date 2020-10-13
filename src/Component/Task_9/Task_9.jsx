import React from 'react'
import './Task_9.css'
import '../Answer/answer.css'
import { question_9, task_9, } from '../Answer/answer'


const Task_9 = (props) => { 
    
    return (
        <div className='task_9'>
            <div className='question'> <span className='item'> {task_9}</span> {question_9} </div>
            <details>
                <summary>  </summary>
                ответ
            </details>

        </div>
    )
}
export default Task_9;
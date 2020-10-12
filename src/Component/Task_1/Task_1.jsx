import React, { useState } from 'react'
import './Task_1.css'
import '../Answer/answer.css'
import { question_1, task_1, } from '../Answer/answer'


const Task_1 = (props) => { // props не используется
    const [count, setCount] = useState(0);
    return (
        <div className='task_1'>
            <div className='question'> <span className='item'> {task_1}</span> {question_1} </div>
            <details>
                <summary>  </summary>
                <p>Вы кликнули {count} раз</p>
                <button onClick={() => setCount(count + 1)}>
                    Нажми на меня</button>
            </details>

        </div>
    )
}
export default Task_1;
import React from 'react'
import './Task_1.css'
import { answer_1, content } from '../Answer/answer'



const Task_1 = (props) => { // props не используется

    return (
        <div className='task_1'>

            <details>
                <summary>  </summary>
                <p><div className='Button_answer'>
                </div>
                    <p>{answer_1}</p></p>
            </details>

        </div>
    )
}
export default Task_1;
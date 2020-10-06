import React, {useState} from 'react'
import './Task_1.css'
// import { answer_1, content } from '../Answer/answer'


const Task_1 = (props) => { // props не используется
    const [count, setCount] = useState(0);
    return (
        <div className='task_1'>
            <details>
                <summary>  </summary>
                {/* <div className='Button_answer'> */}
                                 {/* </div> */}
                {/* <p>{answer_1}</p>  */}
                <p>Вы кликнули {count} раз</p>
                <button onClick={() => setCount(count + 1)}>
                    Нажми на меня</button>     
                
            </details>

        </div>
    )
}
export default Task_1;
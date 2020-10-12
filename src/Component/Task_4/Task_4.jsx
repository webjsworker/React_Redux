import React from 'react'
import './Task_4.css'
import '../Answer/answer.css'
import { task_4, question_4, } from '../Answer/answer'

const Task_4 = (props) => {
    let onBtnClick = (e) => {
        const count = props.count_asinc + 1;
        props.setCount(count)
    }
    return (
        <div className='task_4'>
            <div className='question'><span className='item'>{task_4}</span>{question_4}  </div>
            <details>
                <summary></summary>
                <p>Counter = {props.count_asinc} </p>
                <p> <button onClick={onBtnClick}
                    disabled={props.Bt_value}
                >Counter</button></p>
                {props.isFetching ? <p>Загрузка...</p> : <p>Ок</p>}
            </details>
        </div>
    )
}
export default Task_4;
import React from 'react'
import './Task_4.css'

const Task_4 = (props) => {
    let onBtnClick = (e) => {
        const d = props.count_asinc + 1;
        props.setCount(d)
    }
    return (
        <div className='task_4'>Сожержание ответа: 
            <p>Counter = {props.count_asinc} </p>
            <p> <button onClick={onBtnClick}>Counter</button></p>
            <p> {props.isFetching ? <p>Загрузка...</p> : <p>Ок</p>} </p>
        </div>
    )
}
export default Task_4;
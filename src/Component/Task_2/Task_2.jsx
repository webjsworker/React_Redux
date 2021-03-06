import React from 'react'
import './Task_2.css'
import '../Answer/answer.css'
import { question_2, task_2} from '../Answer/answer'



const Task_2 = (props) => {
    // Функция применяет метод МАР для массива данных namber
    let mapnamber = () => {
        const nambers = props.namber;
        return nambers.map((item, index) => {
            return (
                <li key={item.toString()}>{item}</li>
                //  <li >{item}</li>
            )
        })
    }
    return (
        <div className='task_2'>
            <div className='question'><span className='item'> {task_2}</span> {question_2}</div>
            <details>
                <summary></summary>
                <p>Имя: {props.name}</p>
                <p>Год: {props.year}</p>
                <p>Город: {props.sity}</p>    {/*данные из вложенного обьекта. */}
                <p>Страна: {props.contry}</p> {/*данные из вложенного обьекта. */}
                <p>Массив содержит  {props.namber.length} элементов</p> {/*данные из масива, с применением метода length. */}
                <p>МАР [1,2,3,4,5] :</p> {mapnamber()} {/*маппинг даных из массива  */}
            </details>
        </div>
    )
}
export default Task_2;
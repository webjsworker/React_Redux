import React from 'react'
import './Task_5.css'
import { setWriteText } from '../Action/Action'

const Task_5 = (props) => {
    let handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            onBtn()
            event.preventDefault(); // отмена переноса строки при нажатии Enter
        }
    }
    let handleChange = (event) => {
        let text = event.target.value
        props.setText(text);
    }
    // Добавить условие при пустом поле вводо не выводить время . 
    let onBtn = (e) => {
        let write = props.text;
        if (write) {                  // проверка наличия сообщения !!! ПРИ НАЖАТОМ ENTER В ПОЛЕ ВВОДА ПОЯВЛЯЕТСЯ ЗНАЧЕНИЕ "   "
            props.setWriteText(write);
            let gettime = new Date().toLocaleTimeString();
            props.setTime(gettime);
            let result = gettime + " " + write
            props.text_store.push(result)

            let zero = ''
            props.setZero(zero) // функция зануления текстового поля 
        }
    }
    let timeonline = props.time
    let texts = props.textwrite
    let text = props.text
    let message = props.text_store.map(function (element) {
        return <p>{element}</p>
    });

    return (
        <div className='task_5'>Содержание ответа:
            <p><textarea 
            value={text} 
            onChange={handleChange} 
            onKeyPress={handleKeyPress}
            placeholder="message"
            >...</textarea>
                <button onClick={onBtn} >Set</button>
            </p>
            <p> </p>

            <p>{message}</p>
        </div>
    )
}
export default Task_5;


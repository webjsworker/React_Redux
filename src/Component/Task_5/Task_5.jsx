import React from 'react'
import './Task_5.css'
import '../Answer/answer.css'
import { setWriteText } from '../Action/Action'
import { task_5, question_5 } from '../Answer/answer'
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
        <div className='task_5'>
            <div className='question'><span className='item'>{task_5}</span> {question_5}  </div>
            <details>
                <summary></summary>
                <p><textarea
                    value={text}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="message"
                >...</textarea>
                    <button onClick={onBtn} >Send</button>
                </p>
                <p>{message}</p>
            </details>
        </div>
    )
}
export default Task_5;


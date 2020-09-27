import React from 'react'
import './Task_2.css'


const Task_2 = (props) => {
    // Функция применяет метод МАР для массива данных namber
    let mapnamber = () =>{
     const nambers = props.namber;  
    return  nambers.map((item, index) =>{
         return (
         <p key='{index}'>{item}</p>
         )
     })
   }
    
    return (
        <div className='task_2'>Содержание ответа:
        
    <p>Имя: {props.name}</p>
    <p>Год: {props.year}</p>
    <p>Город: {props.sity}</p>    {/*данные из вложенного обьекта. */}
    <p>Страна: {props.contry}</p> {/*данные из вложенного обьекта. */}
    <p>Массив содержит  {props.namber.length} элементов</p> {/*данные из масива, с применением метода length. */}
    <p>МАР [1,2,3,4,5] : { mapnamber()}</p> {/*маппинг даных из массива  */}
        </div>
    )
}
export default Task_2;
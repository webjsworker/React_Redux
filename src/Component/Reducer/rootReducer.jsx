import { SET_COUNTER, SET_TIME } from '../Action/Action'
import { SET_COUNTER_REQUEST } from '../Action/Action'
import { SET_COUNTER_SACCESS } from '../Action/Action'
import { SET_TIME_REQUEST } from '../Action/Action'
import { SET_TEXT_REQUEST } from '../Action/Action'
import { SET_TEXT_WRITE } from '../Action/Action'
import { SET_TEXT_ZERO } from '../Action/Action'
import { SET_PROGRESS } from '../Action/Action'
import {SET_TIMER} from '../Action/Action'


export const initialeState =
{
    timer_progress: 0 ,
    progress: 0,
    isProgress: false,
    text_store: [], // массив хранения текстовых сообщений 
    textwrite: '', // переменная содержащая строку отправляемую по нажатию на кнопку 
    text: "", // переменная для хранение вводимых значений в текстовое поле в реальном времени 
    time: '-- -- --',
    name: 'react',
    year: '2020',
    adres: {
        sity: 'Mogilev',
        contry: 'Belarus',
    },
    namber: [1, 2, 3, 4, 5],
    items: [],
    counter: 0,
    count_asinc: 0,
    Bt_value: false,
    isFetching: false, // состояние для загрузки прелоудера
}

export function rootReducer(state = initialeState, action) {

    switch (action.type) {

        case SET_COUNTER:
            return { ...state, counter: action.payload, }
        case SET_COUNTER_REQUEST:
            return { ...state, isFetching: true, Bt_value: true  }
        case SET_COUNTER_SACCESS:
            return { ...state, count_asinc: action.payload, isFetching: false, Bt_value: false  }
        case SET_TIME_REQUEST:
            return { ...state, time: action.payload }
        case SET_TEXT_REQUEST:
            return { ...state, text: action.payload }
        case SET_TEXT_WRITE:
            return { ...state, textwrite: action.payload }
        case SET_TEXT_ZERO:
            return { ...state, text: action.payload }
        case SET_PROGRESS:
            return { ...state, progress: action.payload, isProgress: false, s : 5 }
            case SET_TIMER:
                return { ...state,  timer_progress: action.payload, progress: action.payload}
        default:
            return state
    }


}
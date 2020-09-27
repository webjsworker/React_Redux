export let SET_COUNTER = 'SET_COUNTER';
export let SET_COUNTER_REQUEST = 'SET_COUNTER_REQUEST';
export let SET_COUNTER_SACCESS = 'SET_COUNTER_SACCESS';
export let SET_TIME_REQUEST = 'SET_TIME_REQUEST';
export let SET_TEXT_REQUEST = 'SET_TEXT_REQUEST'
export let SET_TEXT_WRITE = 'SET_TEXT_WRITE'
export let SET_TEXT_ZERO = 'SET_TEXT_ZERO'

export function setCount(data) {
        return {
                type: SET_COUNTER,
                payload: data,
        }
}

export function setCount_4(d) {
        return dispatch => {
                dispatch({

                        type: SET_COUNTER_REQUEST,
                        
                })
                setTimeout(() => {
                        dispatch({
                                type: SET_COUNTER_SACCESS,
                                payload: d,
                        })
                }, 2000)

        }
}


export function setTime(timeGO) {
        return {
                type: SET_TIME_REQUEST,
                payload: timeGO,
        }
}

export function setText(text) {
        return {
                type: SET_TEXT_REQUEST,
                payload: text,
        }
}
export function setWriteText(write) {
        return {
                type: SET_TEXT_WRITE,
                payload: write,
        }
}

export function setZero(zero) {
        return {
                type: SET_TEXT_ZERO,
                payload: zero,
        }
}
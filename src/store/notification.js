const NOTIFICATION_CREATE = 'NOTIFICATION_CREATE'
const NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR'

export const clearNotification = () => (dispatch, getState) => {
    const oldTimeout = getState().notification.timeout;

    if (oldTimeout !== null) {
        clearTimeout(oldTimeout);
    }

    dispatch({ type: NOTIFICATION_CLEAR })
}

export const createNotification = (content, type) => (dispatch, getState) => {
    const datetime = new Date()
    const oldTimeout = getState().notification.timeout;

    if (oldTimeout !== null) {
        clearTimeout(oldTimeout);
    }

    const timeout = setTimeout(() => dispatch({ type: NOTIFICATION_CLEAR }), 5000)
    dispatch({ type: NOTIFICATION_CREATE, payload: { content, type, timeout } })
}

const initialState = {
    content: '',
    type: '',
    timeout: null,
}

export default function notificaion(state = initialState, { type, payload }) {
    switch (type) {
        case NOTIFICATION_CREATE:
            return { ...state, content: payload.content, type: payload.type, timeout: payload.timeout }
        case NOTIFICATION_CLEAR:
            return { ...state, content: '', type: '', timeout: null }
        default: return state
    }
}
import {
    LIGHT_OFF, LIGHT_ON,
    SWITCH_THE_FIRST_POSTER, SWITCH_THE_SECOND_POSTER, SWITCH_THE_THIRD_POSTER
} from "./types.js";


const change = (signal) => {
    switch (signal) {
        case LIGHT_OFF:
            return LIGHT_ON
        case  LIGHT_ON:
            return LIGHT_OFF
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case SWITCH_THE_FIRST_POSTER:
            state.first = change(state.first)
            break
        case SWITCH_THE_SECOND_POSTER:
            state.second = change(state.second)
            break
        case SWITCH_THE_THIRD_POSTER:
            state.third = change(state.third)
            break
    }
    return state
}

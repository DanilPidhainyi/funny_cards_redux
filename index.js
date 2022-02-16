import {store} from "./auxiliary-files-for-redux/store.js";
import {
    LIGHT_ON,
    SWITCH_THE_FIRST_POSTER,
    SWITCH_THE_SECOND_POSTER,
    SWITCH_THE_THIRD_POSTER
} from "./auxiliary-files-for-redux/types.js";

const containers = [...document.getElementsByClassName("cardAndSwitch")]
const switches = containers.map(cont => cont.getElementsByClassName("switch_slider")[0])


const card = (elem) => {
    // classList.toggle убирає або додає класс
    return {
        turn_on_the_light: () => {
            elem.classList.remove("card--off")
            elem.classList.add("card--on")
        },
        turn_off_the_light: () => {
            elem.classList.remove("card--on")
            elem.classList.add("card--off")
        }
    }
}

const cards = containers
    .map(cont => cont.getElementsByClassName("card")[0])
    .map(elem => card(elem))

const render_card = (signal, num) => {
    signal === LIGHT_ON
        ? cards[num].turn_on_the_light()
        : cards[num].turn_off_the_light()
}

switches[0].addEventListener('click',
    () => store.dispatch( {type: SWITCH_THE_FIRST_POSTER}),
    false)

switches[1].addEventListener('click',
    () => store.dispatch( {type: SWITCH_THE_SECOND_POSTER}),
    false)

switches[2].addEventListener('click',
    () => store.dispatch( {type: SWITCH_THE_THIRD_POSTER}),
    false)


store.subscribe(() => {
    const state = store.getState()

    Object.values(state).map(render_card)
})

store.dispatch({type: 'INIT_APP'})



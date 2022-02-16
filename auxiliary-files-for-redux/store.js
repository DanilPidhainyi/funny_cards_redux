//import {createStore} from "redux";
import {createStore} from "../craitStore.js";
import {reducer} from "./reducer.js";
import {LIGHT_OFF, LIGHT_ON} from "./types.js";

export const store = createStore(
    reducer,
    {
        first: LIGHT_OFF,
        second: LIGHT_ON,
        third: LIGHT_ON
    }
)

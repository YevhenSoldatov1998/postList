import {combineReducers, createStore} from "redux";
import {postReducer} from "./post-reducer";

let reducers = combineReducers({
    post: postReducer
});
// export type RootState = ReturnType<typeof reducer>

export const store = createStore(reducers);
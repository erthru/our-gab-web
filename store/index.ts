import { combineReducers, createStore } from "redux";

const combinedReducers = combineReducers({});

export type Store = ReturnType<typeof combinedReducers>;
export default createStore(combinedReducers, {});

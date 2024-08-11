import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { accountReducer, createEventReducer, answerReducer, evidenceReducer, urlParamReducer } from "./reducers";

const rootReducer = combineReducers({
    account: accountReducer,
    answer: answerReducer,
    createEvent: createEventReducer,
    evidence: evidenceReducer,
    urlParam: urlParamReducer
})

export const store = configureStore({
    reducer: rootReducer
});

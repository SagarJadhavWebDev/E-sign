import { createWrapper } from "next-redux-wrapper";
import React from "react";
import { createStoreHook } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const initialState = {};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
) as any;

const makeStore = () => store();

export const wrapper = createWrapper(makeStore);

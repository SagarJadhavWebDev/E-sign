import { combineReducers } from "redux";
import userReducer from "./userReducer/user.reducer";
import { userDataType } from "./userReducer/user.types";

export interface ApplicationState {
  userData: userDataType;
}
export default combineReducers({
  userData: userReducer,
});

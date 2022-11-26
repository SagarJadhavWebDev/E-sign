import { STORE_USER_DATA } from "./user.action";

const initialState = {
  userData: {},
};
export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return null;
  }
}

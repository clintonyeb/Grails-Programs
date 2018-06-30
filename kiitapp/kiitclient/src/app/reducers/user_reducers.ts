import {ActionReducer} from "@ngrx/store";
import {User} from "../models/user";
import * as user from "../actions/user_actions";

export interface State {
  entity: User,
  loading: boolean,
  error: boolean,
  authenticated: boolean
}

const initialState: State = {
  entity: {
    id: 0,
    authUser: null,
    enabled: false,
    gender: '',
    password: '',
    avatar: null,
    uniqueId: 0
  },
  loading: false,
  error: false,
  authenticated: false
};


export const userReducer: ActionReducer<State> = (oldState: State, action: user.Actions): State => {
  switch (action.type) {

    case user.ActionTypes.LOGGED_IN:
      return Object.assign({}, oldState, action.payload);

    case user.ActionTypes.LOGGING_OUT:
      return Object.assign({});

    case user.ActionTypes.REGISTER_ACCOUNT:
      return oldState;

    case user.ActionTypes.ACCOUNT_REGISTERED:
      return oldState;

    case user.ActionTypes.LOGGED_OUT:
      return oldState;

    case user.ActionTypes.LOGGING_IN:
      return oldState;

    case user.ActionTypes.LOGGING_IN_ERROR:
      return oldState;

    default:
      return oldState;
  }

};

import {Action} from "@ngrx/store";
import {AuthUser, User} from "../models/user";
import {type} from "../utilities/utilities";

export const ActionTypes = {
  LOGGING_IN:           type('[User] Logging in'),
  LOGGING_IN_ERROR:           type('[User] Logging in error'),
  LOGGED_IN:           type('[User] Logged in'),
  LOGGING_OUT:          type('[User] Logging out'),
  LOGGED_OUT:          type('[User] Logged out'),
  REGISTER_ACCOUNT:     type('[User] Register new account'),
  ACCOUNT_REGISTERED:   type('[User] Account registered'),
};

export class LoginAction implements Action {
  type = ActionTypes.LOGGING_IN;

  constructor(public payload: User) { }
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGGING_OUT;

  constructor() { }
}

export class LoggedInAction implements Action {
  type = ActionTypes.LOGGED_IN;

  constructor(public payload: AuthUser) { }
}

export class LoggedOutAction implements Action {
  type = ActionTypes.LOGGED_OUT;

  constructor() { }
}

export class RegisterAccountAction implements Action {
  type = ActionTypes.REGISTER_ACCOUNT;

  constructor(public paylaod: User) { }
}

export class AccountRegisteredAction implements Action {
  type = ActionTypes.ACCOUNT_REGISTERED;

  constructor(public payload: User) { }
}

export class LogInErrorAction implements Action {
  type = ActionTypes.LOGGING_IN_ERROR;

  constructor(public payload: any) { }
}

export type Actions
  = LoginAction | LogoutAction | LoggedInAction | LoggedOutAction | RegisterAccountAction | AccountRegisteredAction
| LogInErrorAction

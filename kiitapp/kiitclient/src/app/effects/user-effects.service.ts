import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {UserService} from "../services/user.service";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs";
import * as user from "../actions/user_actions";

@Injectable()
export class UserEffectsService {

  constructor(
    public actions$: Actions,
    public userService: UserService) { }

    @Effect()
    loginUser$: Observable<Action> = this.actions$
      .ofType(user.ActionTypes.LOGGING_IN)
      .map((action: user.LoginAction) => action.payload)
      .switchMap(query => {
        if (query === null){
          return null
        }

        return this.userService.loginUser(query.authUser.username, query.password)
          .map(res => new  user.LoggedInAction(res))
          .catch(err => new user.LogInErrorAction(err))
      })



}

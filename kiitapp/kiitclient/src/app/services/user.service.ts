import {Injectable} from "@angular/core";
import {AuthUser, User} from "../models/user";
import {Response, Http} from "@angular/http";
import {getBasicHeaders, BASE_URL} from "../utilities/utilities";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../reducers/index";

@Injectable()
export class UserService {

  constructor(
    public store: Store<AppState>,
    public http: Http) { }

  getCurrentUser() : User{
    let authUser: AuthUser = {
      username: 'clinton',
      access_token: 'token',
      roles: ['role']
    };
   return {
      id: 1,
      password: '',
      authUser: authUser,
      uniqueId: 11111,
      avatar: null,
      enabled: true,
      gender: '1'
    }
  }

  loginUser(username: string, password: string): Observable<AuthUser> {
    return this.http.post(`${BASE_URL}/login`,
      JSON.stringify({username: username, password: password}),
      getBasicHeaders())
      .map((res: Response) => {
        if (res) {
          if (res.status === 200 || res.status === 201) {
            let authUser = res.json() as AuthUser;
            //this.store.dispatch({type: LOGIN, payload: {authUser}});
            //setAccessToken(authUser);
            //console.log('saved token');
            return authUser;
          }
        }
      }).catch((error: any) => {
        if (error.status < 400 || error.status === 500) {
          return Observable.throw(new Error(error.status));
        }
      })
  }

  registerNewUser(username: string, nickname: string, password: string, gender: number) {
    console.log( JSON.stringify({username, nickname, password, gender}));
    return this.http.post(`${BASE_URL}/guests/users`,
      JSON.stringify({username, nickname, password, gender}),
      getBasicHeaders())
      .map((response: Response) => {
        let authUser = response.json() as AuthUser;
        let user = response.json() as User;
        user.authUser = authUser;
      });
  }
}

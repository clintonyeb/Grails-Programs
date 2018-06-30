import {AuthUser} from "../models/user";
import {RequestOptions, Headers} from "@angular/http";

export const BASE_URL = 'http://localhost:8080/api';

export function getAccessToken(): AuthUser {
  let item = localStorage.getItem('access_token');
  console.log('token', item);
  return item ? JSON.parse(item)  as AuthUser : null;
}

export function setAccessToken(authUser: AuthUser): boolean{
  localStorage.setItem('access_token', JSON.stringify(authUser));
  return true;
}

export function  removeAccessToken(): boolean{
  localStorage.removeItem('access_token');
  return true;
}

export function getBasicHeaders(): RequestOptions{
  let header = new  Headers({'Content-Type': 'application/json'});
  header.append('Accept', 'application.json');
  return new RequestOptions({headers: header});
}

export function getAuthenticatedHeader(){
  let authUser = getAccessToken();
  if (authUser && authUser.access_token){
    let header = new  Headers({'Content-Type': 'application/json'});
    header.append('Accept', 'application.json');
    header.append('X-Auth-Token', `${authUser.access_token}`);
    return new RequestOptions({headers: header});
  }
}

let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}



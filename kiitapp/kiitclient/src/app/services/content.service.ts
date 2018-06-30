import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Content} from "../models/content";
import {testContent} from "../testdata/content";
import {User} from "../models/user";
import {testUsers} from "../testdata/user";
import {MenuItem} from "../models/menu-item";

@Injectable()
export class ContentService {

  constructor() { }

  getContent(): Observable<Content[]>{
    return Observable.of(testContent)
  }

  getUser(): Observable<User[]> {
    return Observable.of(testUsers)
  }

  createMenuItems(): MenuItem[] {
    return [
      {
        name: 'Home',
        count: 10
      },
      {
        name: 'Announcements',
        count: 7
      },
      {
        name: 'Articles',
        count: 3
      },
      {
        name: 'Events',
        count: 0
      },
      {
        name: 'Your Profile',
        count: 0
      },
      {
        name: 'Map Guide',
        count: 0
      },
      {
        name: 'KIIT Info',
        count: 0
      },
      {
        name: 'Help and Support',
        count: 0
      },
      {
        name: 'Attribution',
        count: 0
      },
      {
        name: 'Terms and Conditions',
        count: 0
      },
    ]
  }

}

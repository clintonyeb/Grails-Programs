export interface AuthUser {
  username: string;
  roles: string[];
  access_token: string;
}

export interface User {
  id: number;
  password: string;
  avatar: Avatar;
  enabled: boolean;
  uniqueId: number;
  gender: string;
  authUser: AuthUser;
}


export interface Avatar {

  avatarByte: string;
  avatarContentType: string;
  lastUpdated: string;
}

export interface Profile {

  bio: string;
  contact: string;
  address: string;
  emailId: string;
  avatar: Avatar;
  user: User;
  socialNetworks: Array<string>;

}

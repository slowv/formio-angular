export interface IUser {
  username: string;
  password: string;
}

export interface IToken {
  roles: string[];
  token: string;
  name: string;
}

export interface IAuthState {
  isSignIn: boolean;
  refreshToken: string;
  token: string;
  user: IUserInfo;
  roles: string[];
}

export interface IUserInfo {
  username?: string;
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
  email?: string;
  expirePassword?: string;
  callbackUrl?: string;
}

export const InitAuthData: IAuthState = {
  isSignIn: false,
  refreshToken: '',
  token: '',
  user: {
    displayName: '',
    phoneNumber: '',
    photoURL: '',
    username: '',
    email: '',
    expirePassword: '',
    callbackUrl: ''
  },
  roles: []
};

export interface IAuthResponse {
  roles: string[];
  token: string;
  name: string;
}

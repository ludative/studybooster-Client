export interface IUser {
  id: string;
  email: string;
  nickname: string;
  introduction: string;
  profileImage: string;
  isAdmin: boolean;
  deleted: boolean;
  isValidEmail: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserWithToken {
  signIn: {
    token: string;
    user: IUser;
  };
}

export interface IUserInput {
  email: string;
  password: string;
  nickname?: string;
  introduction?: string;
  profileImage?: string;
}

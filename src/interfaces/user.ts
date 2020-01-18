export interface IUser {
  id: number;
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
  token: string;
  user: IUser;
}

export interface IUserInput {
  email: string;
  password: string;
  nickname?: string;
  introduction?: string;
  profileImage?: string;
}

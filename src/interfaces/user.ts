export interface IUser {
  id: String;
  email: String;
  password: String;
  nickname: String;
  introduction: String;
  profileImage: String;
  isAdmin: Boolean;
  deleted: Boolean;
  isValidEmail: Boolean;
  createdAt: String;
  updatedAt: String;
}

import { IUser } from "./user";

export interface IStudy {
  id: String;
  name: String;
  description: String;
  startDate: Number;
  endDate: Number;
  startTime: Number;
  endTime: Number;
  weekPeriod: Number;
  location: String;
  customSubject: String;
  thumbnail: String;
  limitedMemberCount: Number;
  isPrivate: Boolean;
  UserId: Number;
  StudySubjectId: Number;
  StudySubject: [IStudySubject];
  StudyDays: [IStudyDays];
  StudyMembers: [IStudyMembers];
  createdAt: String;
  updatedAt: String;
}

export interface IStudySubject {
  id: String;
  title: String;
}

export interface IStudyDays {
  id: String;
  day: Number;
}

export interface IStudyMembers {
  id: String;
  isApprove: Boolean;
  isReject: Boolean;
  rejectReason: String;
  isBanish: Boolean;
  banishReason: String;
  UserId: Number;
  StudyId: Number;
  User: [IUser];
}

export interface IStudyData {
  getStudyById: IStudy;
}

export interface IStudyVariables {
  id: Number;
}

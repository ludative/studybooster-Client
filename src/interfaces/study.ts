import { IUser } from "./user";
import { IPaginationInput } from "./common";

export interface IStudy {
  id?: string;
  name?: string;
  description?: string;
  startDate?: number;
  endDate?: number;
  startTime?: number;
  endTime?: number;
  weekPeriod?: number;
  location?: string;
  customSubject?: string;
  thumbnail?: string;
  limitedMemberCount?: number;
  isPrivate?: boolean;
  UserId?: number;
  StudySubjectId?: number;
  StudySubject?: IStudySubject[];
  StudyDays?: IStudyDays[];
  StudyMembers?: IStudyMembers[];
  createdAt?: string;
  updatedAt?: string;
}

export interface IStudySubject {
  id: string;
  title: string;
}

export interface IStudyDays {
  id: string;
  day: number;
}

export interface IStudyMembers {
  id: string;
  isApprove: boolean;
  isReject: boolean;
  rejectReason: string;
  isBanish: boolean;
  banishReason: string;
  UserId: number;
  StudyId: number;
  User: IUser[];
}

export interface IStudyDayInput {
  id: string;
  day: number;
}

export interface IGetStudyInput {
  name?: string;
  description?: string;
  startDate?: number;
  endDate?: number;
  startTime?: number;
  endTime?: number;
  weekPeriod?: number;
  location?: string;
  customSubject?: string;
  limitedMemberCount?: number;
  isPrivate?: boolean;
  UserId?: number;
  StudyDays?: IStudyDayInput[];
  orderBy?: string;
  orderDirection?: string;
}

export interface IStudiesData {
  getStudies: {
    count: number;
    rows: IStudy[];
  };
}

export interface IStudiesVariables {
  params: IGetStudyInput;
  paginationParams: IPaginationInput;
  isMine: boolean;
}

export interface IIsStudyBookmarkData {
  getIsStudyBookmark: {
    isBookmark: boolean;
  };
}
export interface IIsStudyBookmarkVariables {
  studyId: number;
}

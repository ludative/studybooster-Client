import { Dispatch } from "react";
import { IToastValues } from "@/hooks/useToast";

export interface IPaginationInput {
  page: number;
  pageSize: number;
}

export interface ISuccessResult {
  isSuccess: boolean;
}

export interface IToastFunction {
  setToast: Dispatch<IToastValues>;
}

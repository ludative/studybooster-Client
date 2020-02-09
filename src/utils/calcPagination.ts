import { IPaginationInput } from "@/interfaces/common";

interface IPaginationOption extends IPaginationInput {
  count: number;
}

export interface IPaginationReturn {
  page: number;
  numberOfPages: number;
  count: number;
}

export default (option: IPaginationOption): IPaginationReturn => {
  const { page, pageSize, count } = option;

  let numberOfPages = 1;
  if (count) {
    numberOfPages = Math.ceil(+count / +pageSize);
  }

  return {
    page,
    numberOfPages,
    count
  };
};

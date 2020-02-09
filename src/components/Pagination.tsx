import React from "react";
import { Box, Button, IconButton } from "@material-ui/core";
import {
  FirstPage,
  NavigateBefore,
  NavigateNext,
  LastPage
} from "@material-ui/icons";

interface IPagination {
  page: number;
  numberOfPages: number;
  prev: boolean;
  next: boolean;
  getNewPage: (page: number) => void;
}
const Pagination: React.FC<IPagination> = ({
  page,
  numberOfPages,
  prev,
  next,
  getNewPage
}) => {
  const paginations: Array<JSX.Element> = [];

  const getPagination = (startIdx: number, endIdx: number): void => {
    for (let i = startIdx; i <= endIdx; i++) {
      paginations.push(
        <Button
          key={i}
          className={`page-btn ${page === i ? "active" : ""}`}
          onClick={() => getNewPage(i)}
        >
          {i}
        </Button>
      );
    }
  };

  if (numberOfPages < 6) {
    /**
     * case 1. 전체 페이지 수가 6보다 작을 경우 (5 이하)
     */
    getPagination(1, numberOfPages);
  } else if (page < 3) {
    /**
     * case 2. 전체 페이지 수가 6 이상이고, 현재 페이지가 3보다 작은 경우
     */
    getPagination(1, 5);
  } else if (page >= numberOfPages - 2) {
    /**
     * case 2. 전체 페이지 수가 6 이상이고, 현재 페이지가 3이상이며,
     * 현재 페이지가 전체 페이지 - 2 랑 같거나 큰 경우
     * ex page = 4 / numberOfPages = 5 (numberOfPage랑 가까워질수록 active 페이지가
     * 가운데로 가면 안됨
     */
    getPagination(numberOfPages - 4, numberOfPages);
  } else {
    /**
     * default case. 현재 페이지 - 2 부터 현재 페이지 + 2
     */
    getPagination(page - 2, page + 2);
  }

  return (
    <Box>
      {prev && (
        <>
          <IconButton
            aria-label="first page"
            onClick={() => getNewPage(1)}
            disabled={page === 1}
          >
            <FirstPage />
          </IconButton>
          <IconButton
            aria-label="prev page"
            onClick={() => getNewPage(page - 1)}
            disabled={page === 1}
          >
            <NavigateBefore />
          </IconButton>
        </>
      )}
      {paginations}
      {next && (
        <>
          <IconButton
            aria-label="next page"
            onClick={() => getNewPage(page + 1)}
            disabled={page === numberOfPages}
          >
            <NavigateNext />
          </IconButton>
          <IconButton
            aria-label="last page"
            onClick={() => getNewPage(numberOfPages)}
            disabled={page === numberOfPages}
          >
            <LastPage />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default Pagination;

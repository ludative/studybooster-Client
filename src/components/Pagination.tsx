import React from 'react'
import {Box, Button, IconButton} from "@material-ui/core";
import {FirstPage, NavigateBefore, NavigateNext, LastPage} from "@material-ui/icons";

interface IPagination {
  page: number;
  numberOfPages: number;
  prev: boolean;
  next: boolean;
  getNewPage: (page: number) => void;
}
const Pagination:React.FC<IPagination> = ({ page, numberOfPages, prev, next, getNewPage }) => {
  const paginations:Array<JSX.Element> = []

  if (numberOfPages < 6) {
    for (let i = 1; i <= numberOfPages; i++) {
      paginations.push(
        <Button
          key={i}
          className={`page-btn ${page === i ? 'active' : ''}`}
          onClick={() => getNewPage(i)}
        >
          {i}
        </Button>
      )
    }
  } else if (page < 3) {
    for (let i = 1; i <= 5; i++) {
      paginations.push(
        <Button
          key={i}
          className={`page-btn ${page === i ? 'active' : ''}`}
          onClick={() => getNewPage(i)}
        >
          {i}
        </Button>
      )
    }
  } else if (page >= numberOfPages - 2) {
    for (let i = numberOfPages - 4; i <= numberOfPages; i++) {
      paginations.push(
        <Button
          key={i}
          className={`page-btn ${page === i ? 'active' : ''}`}
          onClick={() => getNewPage(i)}
        >
          {i}
        </Button>
      )
    }
  } else {
    for (let i = page - 2; i <= page + 2; i++) {
      paginations.push(
        <Button
          key={i}
          className={`page-btn ${page === i ? 'active' : ''}`}
          onClick={() => getNewPage(i)}
        >
          {i}
        </Button>
      )
    }
  }

  return (
    <Box>
      {prev && (
        <>
          <IconButton aria-label="first page" onClick={() => getNewPage(1)} disabled={page === 1}>
            <FirstPage />
          </IconButton>
          <IconButton aria-label="prev page" onClick={() => getNewPage(page - 1)} disabled={page === 1}>
            <NavigateBefore />
          </IconButton>
        </>
      )}
      {paginations}
      {next && (
        <>
          <IconButton aria-label="next page" onClick={() => getNewPage(page + 1)} disabled={page === numberOfPages}>
            <NavigateNext />
          </IconButton>
          <IconButton aria-label="last page" onClick={() => getNewPage(numberOfPages)} disabled={page === numberOfPages}>
            <LastPage />
          </IconButton>
        </>
      )}
    </Box>
  )
}

export default Pagination
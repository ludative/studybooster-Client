import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  TextField
} from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";

import { useQuery } from "@apollo/react-hooks";

import {
  IStudiesData,
  IStudiesVariables,
  IGetStudyInput,
  IStudy
} from "@/interfaces/study";
import { IPaginationInput } from "@/interfaces/common";
import { GET_STUDIES } from "@/queries/study";

import Typography from "@/components/Typography";
import Pagination from "@/components/Pagination";
import calcPagination from "@/utils/calcPagination";

const typographyStyles = {
  root: {
    marginBottom: "30px"
  }
};

const Studies: React.FC = () => {
  const [studies, setStudies] = useState<IStudy[]>([]);
  const [count, setCount] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [paginationParams, setPaginationParams] = useState<IPaginationInput>({
    page: 1,
    pageSize: 12
  });
  const [params, setParams] = useState<IGetStudyInput>({ name: "" });
  const { data } = useQuery<IStudiesData, IStudiesVariables>(GET_STUDIES, {
    variables: { paginationParams, params, isMine: false }
  });

  const getStudies = page => {
    const calculatePagination = calcPagination({
      page,
      pageSize: paginationParams.pageSize,
      count
    });

    setPaginationParams(state => ({
      ...state,
      page: calculatePagination.page
    }));
    setCount(calculatePagination.count);
    setNumberOfPages(calculatePagination.numberOfPages);
  };

  useEffect(() => {
    setStudies(data?.getStudies?.rows ?? []);
    setCount(data?.getStudies?.count ?? 0);

    // TODO first getStudies count가 제대로 들어가지 않아서 getStudies(1) 동작 안함
    const calculatePagination = calcPagination({
      ...paginationParams,
      count: data?.getStudies?.count ?? 0
    });

    setPaginationParams(state => ({
      ...state,
      page: calculatePagination.page
    }));
    setCount(calculatePagination.count);
    setNumberOfPages(calculatePagination.numberOfPages);

    // TODO paginationParams를 넣어야 useEffect warning이 안뜨는데, 넣으면 무한루프에 빠짐
  }, [data]);

  return (
    <Container>
      <Typography styles={typographyStyles} variant="h3" text="스터디 리스트" />
      <Grid
        container
        style={{ marginBottom: 20 }}
        justify="space-between"
        alignItems="center"
      >
        <TextField
          variant="outlined"
          label="Search (Title)"
          size="small"
          name="name"
          onChange={({ target }) =>
            setParams(state => ({ ...state, [target.name]: target.value }))
          }
        />
        <Button variant="outlined" color="primary">
          스터디 개설
        </Button>
      </Grid>
      <Box>
        <GridList cols={3}>
          {studies.map((study: IStudy, index: number) => (
            <GridListTile key={index}>
              <IconButton aria-label="star">
                <StarBorder />
              </IconButton>
              <GridListTileBar
                title={study.name}
                subtitle={study.description}
              />
            </GridListTile>
          ))}
        </GridList>

        {count > paginationParams.pageSize && (
          <Pagination
            page={paginationParams.page}
            numberOfPages={numberOfPages}
            getNewPage={getStudies}
            prev
            next
          />
        )}
      </Box>
    </Container>
  );
};

export default Studies;

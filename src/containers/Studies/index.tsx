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
    variables: { paginationParams, params, isMine: false },
    fetchPolicy: "no-cache"
  });

  const getNewPage = (page: number): void => {
    setPaginationParams(state => ({
      ...state,
      page
    }));
  };

  useEffect(() => {
    const calculatePagination = calcPagination({
      ...paginationParams,
      count: data?.getStudies?.count ?? 0
    });

    setCount(calculatePagination.count);
    setNumberOfPages(calculatePagination.numberOfPages);

    setStudies(data?.getStudies?.rows ?? []);
  }, [data, paginationParams]);

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
            getNewPage={getNewPage}
            prev
            next
          />
        )}
      </Box>
    </Container>
  );
};

export default Studies;

import React, {useEffect, useState} from 'react'
import {
  Box, Button,
  Container,
  GridList, GridListTile,
  GridListTileBar, IconButton,
  Typography
} from "@material-ui/core";
import { StarBorder} from "@material-ui/icons";

import {useQuery} from "@apollo/react-hooks";

import { IStudiesData, IStudiesVariables, IStudy } from "@/interfaces/study";
import { GET_STUDIES } from "@/queries/study";

const Studies: React.FC = () => {
  const [studies, setStudies] = useState<IStudy[]>([]);
  const { data } = useQuery<IStudiesData, IStudiesVariables>(GET_STUDIES, {
    variables: { paginationParams: { page: 1, pageSize: 12 }, params: { name: "" }, isMine: false }
  });

  useEffect(() => {
    setStudies(data?.getStudies?.rows ?? []);
  }, [data]);

  return (
    <Container>
      <Typography variant="h2">스터디 리스트</Typography>
      <Box>
        <Button>스터디 개설</Button>
      </Box>
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
      </Box>
    </Container>
  )
}

export default Studies
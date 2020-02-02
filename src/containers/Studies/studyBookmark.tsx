import React from "react";
import { IconButton } from "@material-ui/core";
import { StarBorder, Star } from "@material-ui/icons";
import { useQuery } from "@apollo/react-hooks";
import {
  IIsStudyBookmarkData,
  IIsStudyBookmarkVariables
} from "@/interfaces/study";
import { GET_IS_STUDY_BOOKMARK } from "@/queries/study";

interface IStudyRowProps {
  studyId: number;
}

const StudyBookmark: React.FC<IStudyRowProps> = ({ studyId }) => {
  const { data } = useQuery<IIsStudyBookmarkData, IIsStudyBookmarkVariables>(
    GET_IS_STUDY_BOOKMARK,
    {
      variables: { studyId },
      fetchPolicy: "no-cache"
    }
  );

  return (
    <IconButton aria-label="star">
      {data?.getIsStudyBookmark.isBookmark ? <Star /> : <StarBorder />}
    </IconButton>
  );
};

export default StudyBookmark;

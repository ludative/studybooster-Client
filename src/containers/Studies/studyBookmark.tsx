import React from "react";
import { IconButton } from "@material-ui/core";
import { StarBorder, Star } from "@material-ui/icons";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  IIsStudyBookmarkData,
  IIsStudyBookmarkVariables,
  IToggleStudyBookmarkData
} from "@/interfaces/study";
import { GET_IS_STUDY_BOOKMARK } from "@/queries/study";
import { TOGGLE_STUDY_BOOKMARK } from "@/mutations/study";

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
  const [toggleStudyBookmark] = useMutation<
    IToggleStudyBookmarkData,
    IIsStudyBookmarkVariables
  >(TOGGLE_STUDY_BOOKMARK);

  const toggleStudyBookmarkPromise = async (): Promise<void> => {
    try {
      const { data } = await toggleStudyBookmark({
        variables: { studyId }
      });

      console.log(data);
    } catch (e) {
      alert(e?.message);
    }
  };

  return (
    <IconButton aria-label="star" onClick={toggleStudyBookmarkPromise}>
      {data?.getIsStudyBookmark.isBookmark ? <Star /> : <StarBorder />}
    </IconButton>
  );
};

export default StudyBookmark;

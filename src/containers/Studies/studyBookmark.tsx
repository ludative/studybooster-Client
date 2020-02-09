import React, { Dispatch } from "react";
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
import withToast from "@/withToast";
import { IToastValues } from "@/hooks/useToast";

interface IStudyRowProps {
  studyId: number;
  setToast: Dispatch<IToastValues>;
}

const StudyBookmark: React.FC<IStudyRowProps> = ({ studyId, setToast }) => {
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
      await toggleStudyBookmark({
        variables: { studyId }
      });

      setToast({
        message: "북마크에 추가되었습니다!",
        type: "success"
      });
    } catch (e) {
      setToast({
        message: e.message,
        type: "error"
      });
    }
  };

  return (
    <IconButton aria-label="star" onClick={toggleStudyBookmarkPromise}>
      {data?.getIsStudyBookmark.isBookmark ? <Star /> : <StarBorder />}
    </IconButton>
  );
};

export default withToast(StudyBookmark);

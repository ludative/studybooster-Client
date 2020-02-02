import gql from "graphql-tag";

export const TOGGLE_STUDY_BOOKMARK = gql`
  mutation toggleStudyBookmark($studyId: Int!) {
    toggleStudyBookmark(studyId: $studyId) {
      isBookmark
    }
  }
`;

import gql from "graphql-tag";

export const GET_STUDIES = gql`
  query getStudies(
    $paginationParams: PaginationInput
    $params: GetStudyInput
    $isMine: Boolean!
  ) {
    getStudies(
      paginationParams: $paginationParams
      params: $params
      isMine: $isMine
    ) {
      count
      rows {
        id
        name
        description
      }
    }
  }
`;

export const GET_STUDY_BY_ID = gql`
  query getStudyById($id: Int!) {
    getStudyById(id: $id) {
      id
      name
      description
      startDate
      endDate
      startTime
      endTime
      weekPeriod
      location
      customSubject
      thumbnail
      limitedMemberCount
      isPrivate
      UserId
      StudySubjectId
      StudySubjects {
        id
        title
      }
      StudyDays {
        id
        day
      }
      StudyMembers {
        id
        isApprove
        isReject
        rejectReason
        isBanish
        banishReason
        UserId
        StudyId
        createdAt
        updatedAt
        User {
          id
          email
          nickname
          introduction
          profileImage
          isAdmin
          deleted
          isValidEmail
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_IS_STUDY_BOOKMARK = gql`
  query getIsStudyBookmark($studyId: Int!) {
    getIsStudyBookmark(studyId: $studyId) {
      isBookmark
    }
  }
`;

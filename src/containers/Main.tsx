import * as React from "react";
import { useQuery } from "@apollo/react-hooks";

// import { IStudyData, IStudyVariables } from "@/interfaces/study";
// import { GET_STUDY_BY_ID } from "@/queries/study";
import { GET_USER_BY_TOKEN } from "@/queries/user";

import InputButton from "@/components/InputButton";
import { IUserByToken } from "@/interfaces/user";

const App: React.FC = () => {
  // const { data } = useQuery<IStudyData, IStudyVariables>(GET_STUDY_BY_ID, {
  //   variables: { id: 1 }
  // });

  const { data } = useQuery<IUserByToken>(GET_USER_BY_TOKEN);

  console.log("user", data?.getUserByToken?.email ?? data);

  // console.log(data?.getStudyById ?? 'nullish operator');

  return (
    <div>
      <h2>
        My first Apollo app{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>

      <InputButton />
    </div>
  );
};

export default App;

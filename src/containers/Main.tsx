import * as React from "react";
// import { useQuery } from "@apollo/react-hooks";

// import { IStudyData, IStudyVariables } from "@/interfaces/study";
// import { GET_STUDY_BY_ID } from "@/queries/study";

import InputButton from "@/components/InputButton";
import useAuth from "@/hooks/useAuth";
import { IUser } from "@/interfaces/user";

const App: React.FC = () => {
  // const { data } = useQuery<IStudyData, IStudyVariables>(GET_STUDY_BY_ID, {
  //   variables: { id: 1 }
  // });

  // console.log(data?.getStudyById ?? 'nullish operator');

  const isLogin: IUser | undefined = useAuth();

  console.log("isLogin", isLogin);

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

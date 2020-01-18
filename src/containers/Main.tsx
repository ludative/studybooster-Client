import * as React from "react";
import { useQuery } from "@apollo/react-hooks";

import { IStudyData, IStudyVariables } from "@/interfaces/study";
import { GET_STUDY_BY_ID } from "@/queries/study";

const App: React.FC = () => {
  const { data } = useQuery<IStudyData, IStudyVariables>(GET_STUDY_BY_ID, {
    variables: { id: 1 }
  });

  console.log(data?.getStudyById ?? 'nullish operator');

  return (
    <div>
      <h2>
        My first Apollo app{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
    </div>
  );
};

export default App;

import * as React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_STUDY_BY_ID } from "./queries/study";

const App: React.FC = () => {
  const { loading, data } = useQuery<any, any>(GET_STUDY_BY_ID, {
    variables: { id: 1 }
  });

  console.log(loading);
  console.log("data", data);
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

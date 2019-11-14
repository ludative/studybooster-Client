import * as React from "react";
import { Button } from "./styles/button";

const App: React.FC = () => {
  return (
    <div>
      <h2>
        StudyBooster{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
        <Button>로그인</Button>
      </h2>
    </div>
  );
};

export default App;

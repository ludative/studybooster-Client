import * as React from "react";

import InputButton from "@/components/InputButton";

const App: React.FC = () => {
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

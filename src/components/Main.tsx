import React from "react";

export interface MainProps {}

const Main = ({}: MainProps): JSX.Element => (
  <div>
    <h2>
      StudyBooster{" "}
      <span role="img" aria-label="rocket">
        🚀
      </span>
      <a href="/login">로그인</a>
    </h2>
  </div>
);

export default Main;

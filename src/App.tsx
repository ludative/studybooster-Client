import React, { useState } from "react";
import Input, { IInputReturnData } from "@/components/Common/input";
import { Button } from "@/styles/button";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const handleChange = ({ value, name }: IInputReturnData) => {
    if (name === "name") {
      setName(value);
    }

    if (name === "count") {
      setCount(+value);
    }
  };

  const [count, setCount] = useState<number | string>("");

  return (
    <div>
      <div>
        My first Apollo app{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
        <Button danger={false}>행복하자~~~</Button>
        <Input
          value={name}
          name={"name"}
          onChange={handleChange}
          maxLength={3}
        />
        <Input
          type={"number"}
          value={count}
          name={"count"}
          onChange={handleChange}
          max={3}
        />
        <h1>name: {name}</h1>
        <h2>count: {count}</h2>
      </div>
    </div>
  );
};

export default App;

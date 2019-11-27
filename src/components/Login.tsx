import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from "../mutations/user";
import { Button } from "../styles/button";

import { IUser } from "../interfaces/user";

const LoginComponents = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signIn, { loading, error }] = useMutation<{ signIn: IUser }>(SIGN_IN, {
    variables: { email, password }
  });

  const login = async (): Promise<void> => {
    try {
      const result = await signIn();
      if (result) {
        setEmail("");
        setPassword("");
      }
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <input
        value={email}
        name="email"
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="email"
        disabled={loading}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        placeholder="password"
        disabled={loading}
      />
      <Button onClick={login} disabled={loading} login={true}>
        로그인
      </Button>
      {error && <p style={{ color: "red" }}>Error :(</p>}
    </>
  );
};

export default LoginComponents;

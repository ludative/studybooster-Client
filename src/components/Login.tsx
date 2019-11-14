import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from "../mutations/user";
import { Button } from "../styles/button";

export interface LoginProps {}

const LoginComponents = ({}: LoginProps) => {
  const [signIn, { loading, error }] = useMutation(SIGN_IN);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signIn({ variables: { email, password } });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
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
    </div>
  );
};

export default LoginComponents;

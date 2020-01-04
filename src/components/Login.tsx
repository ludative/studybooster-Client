import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { SIGN_IN } from "../mutations/user";
import { Button } from "../styles/button";

import { IUser } from "../interfaces/user";

const LoginComponents = () => {
  const { register, handleSubmit, watch, errors } = useForm<IUser>();

  const [signIn, { loading, error }] = useMutation<{ signIn: IUser }>(SIGN_IN, {
    variables: { email: watch("email"), password: watch("password") }
  });

  const onSubmit = handleSubmit(async () => {
    try {
      const result = await signIn();
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        ref={register({ required: true })}
        placeholder="email"
        disabled={loading}
      />
      {errors && errors.email && "이메일을 입력해주세요."}
      <input
        type="password"
        name="password"
        ref={register({ required: true })}
        placeholder="password"
        disabled={loading}
      />
      {errors && errors.password && "비밀번호를 입력해주세요."}
      <Button type="submit" disabled={loading} login={true}>
        로그인
      </Button>
      {error && <p style={{ color: "red" }}>Error :(</p>}
    </form>
  );
};

export default LoginComponents;

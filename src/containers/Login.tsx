import * as React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import { IUserWithToken, IUserInput } from "@/interfaces/user";

import { SIGN_IN } from "@/mutations/user";
import { Button, TextField, Container, Grid } from "@material-ui/core";

import { setTokenLocalStorage } from "@/utils/localStorage";

const Login: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<IUserInput>();
  const history = useHistory();

  const [signIn] = useMutation<{ signIn: IUserWithToken }>(SIGN_IN, {
    variables: { email: watch("email"), password: watch("password") }
  });

  const onSubmit = handleSubmit(async () => {
    try {
      const response = await signIn();
      if (response?.data?.signIn?.token) {
        setTokenLocalStorage(response.data.signIn.token);
        history.push("/");
      }
    } catch (error) {
      alert(error.message);
    }
  });

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Grid container direction={"column"} justify={"center"} spacing={1}>
          <h2>로그인</h2>
          <TextField
            name="email"
            label="Email*"
            inputRef={register({ required: true })}
          />
          {errors?.email && <p>Email is required :( </p>}
          <TextField
            name="password"
            label="Password*"
            inputRef={register({ required: true })}
          />
          {errors?.password && <p>Password is required :(</p>}
          <Button type={"submit"}>Login</Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;

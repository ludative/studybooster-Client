import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

import { IUserWithToken, IUserInput } from "@/interfaces/user";

import { SIGN_IN } from "@/mutations/user";
import {
  Container,
  Grid,
  Button,
  TextField,
  Checkbox
} from "@material-ui/core";

import {
  setTokenLocalStorage,
  setEmailLocalStorage,
  getEmailLocalStorage
} from "@/utils/localStorage";
import errorHandler from "@/utils/errorHandler";
import withToast from "@/withToast";
import { IToastFunction } from "@/interfaces/common";

const passwordRegex = /(?=.*[a-zA-Z])(?=.*[-₩`~!@#$%^&*=|\\\'\";\/()_+|<>?,.:{}])(?=.*[0-9]).{8,}/;
const SigninSchema = yup.object().shape({
  email: yup
    .string()
    .email("🙅🏻‍♀️이메일 형식에 맞지 않습니다.")
    .required("🙅🏻‍♀️이메일을 입력해주세요!"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "🙅🏻‍♂️영문 대,소문자, 특수문자 숫자를 포함한 8자리 이상의 비밀번호를 입력해주세요."
    )
    .required("🙅🏻‍♂️비밀번호를 입력해주세요!")
    .typeError(
      "🙅🏻‍♂️영문 대,소문자, 특수문자 숫자를 포함한 8자리 이상의 비밀번호를 입력해주세요."
    )
});

const Login: React.FC<IToastFunction> = ({ setToast }) => {
  const { register, setValue, handleSubmit, watch, errors } = useForm<
    IUserInput
  >({
    validationSchema: SigninSchema
  });

  const [isRememberEmail, setIsRememberEmail] = useState<boolean>(false);
  useEffect(() => {
    const rememberEmail: string = getEmailLocalStorage() ?? "";
    if (!!rememberEmail) {
      setIsRememberEmail(true);
      setValue("email", rememberEmail);
    }
  }, []);

  const history = useHistory();
  const [signIn] = useMutation<IUserWithToken, IUserInput>(SIGN_IN, {
    variables: {
      email: watch("email"),
      password: watch("password")
    }
  });

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setIsRememberEmail(target.checked);
  };

  const onSubmit = handleSubmit(
    async (): Promise<void> => {
      try {
        const response = await signIn();
        if (!response?.data?.signIn?.user?.isValidEmail) {
          return history.push("/resend-email");
        }

        if (response?.data?.signIn?.token) {
          setTokenLocalStorage(response.data.signIn.token);
          setEmailLocalStorage(response.data.signIn?.user?.email);
        }

        if (!response?.data?.signIn?.user?.isValidEmail) {
          return history.push("/resend-email");
        }

        history.push("/");
      } catch (error) {
        setToast({
          message: errorHandler(error),
          type: "error"
        });
      }
    }
  );

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Grid container direction={"column"} justify={"center"} spacing={1}>
          <h2>로그인</h2>
          <TextField
            name="email"
            label="Email*"
            inputRef={register({ required: true })}
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />
          <TextField
            name="password"
            type="password"
            label="Password*"
            autoComplete="autoComplete"
            inputRef={register({ required: true })}
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />
          <div>
            <Checkbox
              id="rememberEmail"
              checked={isRememberEmail}
              onChange={handleChange}
            />
            <label htmlFor="rememberEmail">이메일 기억하기</label>
          </div>
          <Button type={"submit"}>Login</Button>
        </Grid>
      </form>
    </Container>
  );
};

export default withToast(Login);

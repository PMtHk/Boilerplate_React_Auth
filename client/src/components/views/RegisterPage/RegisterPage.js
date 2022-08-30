import React, { useState } from "react";
import { registerUser } from "../../../_actions/user_action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const RegisterBody = styled.body`
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to top right, #92b5db 0%, #cfffe5 100%);
`;

const RegisterWrapper = styled.section``;

const Title = styled.h1``;

const RegisterForm = styled.form``;

const InputWrapper = styled.div``;

const Input = styled.input``;

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state 생성
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Name, setName] = useState("");
  const [userTel, setuserTel] = useState("");

  // handler 생성
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onUserTelHandler = (event) => {
    setuserTel(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // refresh 를 방지해서 다음으로 해야할 작업 수행에 방해가 없도록 한다.
    // 해당 코드가 없다면, refresh가 진행되어 state 값이 비게 된다.

    if (Email === "") {
      return alert("이메일을 입력하세요!");
    }
    if (Password === "") {
      return alert("비밀번호를 입력하세요!");
    }
    if (ConfirmPassword === "") {
      return alert("비밀번호 확인을 입력하세요!");
    }
    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    if (Name === "") {
      return alert("이름을 입력하세요!");
    }
    if (userTel === "") {
      return alert("전화번호를 입력하세요!");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
      usertel: userTel,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <RegisterBody>
      <RegisterWrapper>
        <RegisterForm onSubmit={onSubmitHandler}>
          <Title>회원가입</Title>
          <InputWrapper>
            <label>Email</label>
            <Input type="email" value={Email} onChange={onEmailHandler} />
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호(8자이상)</label>
            <Input
              type="password"
              value={Password}
              onChange={onPasswordHandler}
            />
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호 확인</label>
            <Input
              type="password"
              value={ConfirmPassword}
              onChange={onConfirmPasswordHandler}
            />
          </InputWrapper>
          <InputWrapper>
            <label>이름</label>
            <Input type="text" value={Name} onChange={onNameHandler} />
          </InputWrapper>
          <InputWrapper>
            <label>전화번호</label>
            <Input type="tel" value={userTel} onChange={onUserTelHandler} />
          </InputWrapper>
          <button type="submit">회원가입</button>
        </RegisterForm>
      </RegisterWrapper>
    </RegisterBody>
  );
}

export default RegisterPage;

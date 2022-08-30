import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
`;

const Title = styled.h2``;

function LandingPage() {
  const navigate = useNavigate();

  const onClickHandler = () =>
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("Failed to logout");
      }
    });

  return (
    <LandingWrapper>
      <Title>시작 페이지</Title>
      <button onClick={onClickHandler}>logout</button>
    </LandingWrapper>
  );
}

export default LandingPage;

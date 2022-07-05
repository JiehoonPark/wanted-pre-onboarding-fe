import React, { useRef } from 'react';
import styled from 'styled-components';
import { EmailValidation, PasswordValidation } from '../utils/validation';
import { useState } from 'react';
import { useEffect } from 'react';
import { theme } from 'styles/theme';

const Login = () => {
  const idInputRef = useRef('');
  const passwordInputRef = useRef('');
  const [isValid, setIsValid] = useState({
    id: undefined,
    password: undefined,
    isVerfied: undefined,
  });
  const testUserInfo = { id: 'wanted@gmail.com', password: 'Wanted123!' };

  function CheckValidation(event, result) {
    if (isValid[event.target.name] === result) return;
    setIsValid({ ...isValid, [event.target.name]: result });
  }

  useEffect(() => {
    if (isValid.id && isValid.password) {
      setIsValid({ ...isValid, isVerfied: true });
    } else {
      setIsValid({ ...isValid, isVerfied: false });
    }
  }, [isValid.id, isValid.password]);

  return (
    <Container>
      <div className="header">Wanted Instagram</div>
      <main>
        <Input
          placeholder="사용자 이름, 또는 이메일"
          name="id"
          ref={idInputRef}
          validation={isValid.id}
          onChange={(event) => {
            idInputRef.current = event.target.value;
            CheckValidation(event, EmailValidation(event.target.value));
          }}
        />
        <Input
          placeholder="비밀번호"
          name="password"
          validation={isValid.password}
          onChange={(event) => {
            passwordInputRef.current = event.target.value;
            CheckValidation(event, PasswordValidation(event.target.value));
          }}
        />
        <Button
          type="button"
          validation={isValid.isVerfied}
          onClick={() => {
            if (
              isValid.id &&
              isValid.password &&
              idInputRef.current === testUserInfo.id &&
              passwordInputRef.current === testUserInfo.password
            ) {
              window.localStorage.setItem('id', idInputRef.current);
              window.location.replace('/');
            }
          }}
        >
          로그인
        </Button>
      </main>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  .header {
    padding: 100px;
    text-align: center;
    font-weight: bold;
    font-size: 56px;
  }
  main {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 300px;
    padding-top: 80px;
    > input,
    button {
      padding: 15px 10px 15px 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.validation ? theme.color.primary : theme.color.disabled};
  color: white;
  border: 0;
  cursor: pointer;
  :active {
    border: 1px solid #cccccc;
    background: white;
    color: rgba(var(--ca6, 219, 219, 219), 1);
  }
`;

const Input = styled.input`
  border: ${(props) => (props.validation === false ? '1px' : '1.5px')} solid
    ${(props) => (props.validation === false ? 'red' : '#cccccc')};
  :focus {
    border: ${(props) => (props.validation === false ? '1px' : '1.5px')} solid
      ${(props) => (props.validation === false ? 'red' : '#cccccc')};
  }
  ::placeholder {
    color: rgba(var(--ca6, 219, 219, 219), 1);
  }
`;

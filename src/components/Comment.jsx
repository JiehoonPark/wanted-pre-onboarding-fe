import React from 'react';
import styled from 'styled-components';

const Comment = ({ commentInfo }) => {
  const { nickName, content } = commentInfo;
  return (
    <Container>
      <div className="nickname">{nickName}</div>
      <div className="content">{content}</div>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  padding: 5px;
  gap: 20px;
  align-items: center;
  .nickname {
    font-size: 16px;
    font-weight: bold;
  }
  .content {
    font-size: 14px;
  }
`;

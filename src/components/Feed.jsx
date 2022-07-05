import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { useState, useRef } from 'react';
import { theme } from 'styles/theme';
import { BsThreeDots } from 'react-icons/bs';
import {
  FaCircle,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegSmile,
  FaRegBookmark,
} from 'react-icons/fa';

const Feed = ({ feedInfo }) => {
  const { nickName, image, comments } = feedInfo;
  const [commentList, setCommentList] = useState(comments);
  const inputRef = useRef('');
  const [isImageReady, setIsImageReady] = useState(false);
  const loginId = window.localStorage.getItem('id').split('@')[0].toString();

  function PostComment() {
    if (inputRef.current.value === '') return;
    setCommentList((prev) => [
      ...prev,
      { nickName: loginId, content: inputRef.currnet },
    ]);
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  return (
    <Container isImageReady={isImageReady}>
      <div className="header">
        <div className="profile">
          <FaCircle size={35} />
          <div>{nickName}</div>
        </div>
        <BsThreeDots size={15} />
      </div>

      <div className="picture">
        <img src={image} onLoad={() => setIsImageReady(true)} />
      </div>

      <div className="widget">
        <div className="icons">
          <FaRegHeart size={20} />
          <FaRegComment size={20} />
          <FaRegPaperPlane size={20} />
        </div>
        <FaRegBookmark size={20} />
      </div>

      <div className="like">좋아요 0 개 </div>

      {commentList?.map((commentInfo, key) => {
        return <Comment commentInfo={commentInfo} key={key} />;
      })}

      <div className="post-comment">
        <FaRegSmile size={20} className="post-comment_icon" />
        <input
          ref={inputRef}
          onChange={(e) => (inputRef.currnet = e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && PostComment()}
        />
        <button onClick={PostComment}>게시</button>
      </div>
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  display: ${(props) => (props.isImageReady ? 'flex' : 'none')};
  flex-direction: column;
  border: 0.1px solid ${theme.color.border};
  border-radius: 5px;
  margin-top: 50px;
  > div,
  input {
    width: 100%;
    :not(.picture) {
      padding: 5px;
    }
  }

  .header {
    display: flex;
    padding: 5px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    .profile {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .picture {
    display: flex;
    justify-content: center;
    margin: 5px 0;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      width: auto;
      @media ${theme.deviceSize.max.mobile} {
        width: 100%;
      }
    }
  }

  .widget {
    display: flex;
    justify-content: space-between;
    .icons {
      display: flex;
      gap: 10px;
    }
  }

  .like {
    margin: 10px 0px 20px 0px;
  }

  .post-comment {
    display: flex;
    align-items: center;
    border-top: 0.1px solid lightgrey;
    input {
      resize: none;
      padding: 5px 0px 5px 20px;
      border: 0;
    }
    button {
      width: 50px;
      background: none;
      font-weight: bold;
      color: skyblue;
      cursor: pointer;
      :active {
        color: grey;
      }
    }
  }
`;

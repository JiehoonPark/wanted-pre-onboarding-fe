import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Feed from '../components/Feed';
import { useEffect } from 'react';
import { getFeeds } from 'api/feeds';

const Home = () => {
  const isLogin = window.localStorage.getItem('id');
  if (!isLogin) return <Navigate to="/login" />;
  const [feeds, setFeeds] = useState(null);

  useEffect(() => {
    async function fetchFeeds() {
      const response = await getFeeds();
      setFeeds(response);
    }
    fetchFeeds();
  }, []);

  return (
    <Container>
      <main>
        {feeds?.map((feed, key) => {
          return <Feed feed={feed} key={key} />;
        })}
      </main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  main {
    width: 100%;
    max-width: 767px;
    margin: 0 auto;
  }
`;

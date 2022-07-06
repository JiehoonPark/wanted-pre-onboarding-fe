import axios from 'axios';

export const getFeeds = async () => {
  const response = await axios.get('http://localhost:3001/feed');
  return response.data;
};

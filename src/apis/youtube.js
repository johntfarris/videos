import axios from 'axios';

const KEY = 'AIzaSyBe9fZ9UOtggw-iCdd3UHuga21IHdh8Li4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

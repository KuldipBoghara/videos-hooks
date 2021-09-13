import axios from 'axios';

const KEY = 'AIzaSyBa3ebFnTGvYlgzLaKc2n_JYTaHksqk6oo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

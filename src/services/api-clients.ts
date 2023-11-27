import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'eaf61602fc28427797e422df553ae9c3',
  },
});

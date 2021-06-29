import axios from 'axios';
const baseURL = 'http://localhost:8080/api/v1';
const scrapeURL = 'http://localhost:8055/api/v1/scrape';
export const network = axios.create({ baseURL });
export const routes = {
  onion: {
    urls: `${baseURL}/onion/url`,
    allUrls: `${baseURL}/onion/allurls`,
    scrape: `${baseURL}/onion/scrape`,
    pastes: {
      stronghold: `${baseURL}/onion/stronghold`,
      deeppaste: `${baseURL}/onion/deeppaste`,
    },
  },
  database: {
    stronghold: `${baseURL}/database/pastes?=stronghold`,
    deeppaste: `${baseURL}/database/pastes?=deeppaste`,
  },
  scrape: `${scrapeURL}/scrape`,
  validations: {
    username: `${baseURL}/validation/validateusername`,
    nickname: `${baseURL}/validation/validatenickname`,
    idea: `${baseURL}/validation/validateidea`,
  },
  register: {
    auth: `${baseURL}/auth/register`,
    user: `${baseURL}/user/register`,
  },
  login: {
    auth: `${baseURL}/auth/login`,
    user: `${baseURL}/user/user`,
  },
  logout: `${baseURL}/auth/logout`,
  token: {
    validate_token: `${baseURL}/auth/tokenValidate`,
    token: `${baseURL}/auth/token`,
    refresh: `${baseURL}/auth/refresh`,
  },
  private: {
    user_profile: `${baseURL}/user/user`,
  },
};

import axios from 'axios'

export const dataSildeBar = () => axios.get('https://6361ddfc7521369cd05fab83.mockapi.io/api/data-slidebar');

export const dataCommonConcern = () => axios.get('https://6361ddfc7521369cd05fab83.mockapi.io/api/data-concern');

export const dataLumniSaying = () => axios.get('https://6361ddfc7521369cd05fab83.mockapi.io/api/data-saying');

export const dataMustHave = () => axios.get('https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/mustHave');
export const dataCampus = () => axios.get('https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/mainCampus');
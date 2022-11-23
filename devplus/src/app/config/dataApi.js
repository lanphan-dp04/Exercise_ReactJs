import axios from 'axios'

export const dataSildeBar = () => axios.get('https://6361ddfc7521369cd05fab83.mockapi.io/api/data-slidebar');

export const dataCommonConcern = () => axios.get('https://6361ddfc7521369cd05fab83.mockapi.io/api/data-concern');

export const dataLumniSaying = () => axios.get('https://6361ddfc7521369cd05fab83.mockapi.io/api/data-saying');
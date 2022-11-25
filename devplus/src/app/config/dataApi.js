import axios from "axios";

export const dataSildeBar = () =>
  axios.get("https://dp-04-nodejs-pls.herokuapp.com/slideBar/api");

export const dataCommonConcern = () =>
  axios.get("https://dp-04-nodejs-pls.herokuapp.com/concern/api");

export const dataLumniSaying = () =>
  axios.get("https://dp-04-nodejs-pls.herokuapp.com/saying/api");

export const dataMustHave = () =>
  axios.get("https://dp-04-nodejs-pls.herokuapp.com/must-have/api");

export const dataCampus = () =>
  axios.get("https://dp-04-nodejs-pls.herokuapp.com/campus/api");
export const dataAboutDevplus = () =>
  axios.get("https://dp-04-nodejs-pls.herokuapp.com/about/api");
export const dataAdmission = () =>
  axios.get("https://dp-04-nodejs-pls.herokuapp.com/admission/api");

//   export const dataSildeBar = () =>
//   axios.get("https://6361ddfc7521369cd05fab83.mockapi.io/api/data-slidebar");

// export const dataCommonConcern = () =>
//   axios.get("https://6361ddfc7521369cd05fab83.mockapi.io/api/data-concern");

// export const dataLumniSaying = () =>
//   axios.get("https://6361ddfc7521369cd05fab83.mockapi.io/api/data-saying");

// export const dataMustHave = () =>
//   axios.get("https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/mustHave");

// export const dataCampus = () =>
//   axios.get("https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/mainCampus");
// export const dataAboutDevplus = () =>
//   axios.get("https://636dab7a91576e19e32cef5d.mockapi.io/aboutdevplus");
// export const dataAdmission = () =>
//   axios.get("https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/admission");

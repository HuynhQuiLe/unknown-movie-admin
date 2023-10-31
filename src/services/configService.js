// const BASE_URL = "http://localhost:6868/";
const BASE_URL = "https://unknown-movie.adaptable.app/";

export const USER_BASE_URL = `${BASE_URL}users`;

export const CAROUSEL_BASE_URL = `${BASE_URL}carousels`;

export const MOVIE_BASE_URL = `${BASE_URL}movies`;

export const THEATER_BASE_URL = `${BASE_URL}theaters`;

export const BRANCH_BASE_URL = `${BASE_URL}branches`;

export const SCHEDULE_BASE_URL = `${BASE_URL}schedules`;

export const UPLOAD_IMAGES_URL = `${BASE_URL}upload-images`;

const TOKEN = "";

export const config = {
  headers: { token: TOKEN },
};

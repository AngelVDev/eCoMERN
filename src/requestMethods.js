import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWI0YTEwMDQ1YTE3NTJkNmI4ZWU5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjQwOTMwNiwiZXhwIjoxNjU2NjY4NTA2fQ.wkSoOiY2UXgNrKO3RoGhky3md3iIH6f6i5o3eIA9kNc";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

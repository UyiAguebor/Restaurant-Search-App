import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Fj1Hq095PzYy5smGMcakV__XrKDLjbLXaU8i9v3fDBHluUcf3y51VLoXfaMvgzU6ca-W3b2NhEfj_8FG1f3m1uZ0847MoFWwZq8pmQnDwTnJbhdmQaZ3sglZWwSXZXYx",
  },
});


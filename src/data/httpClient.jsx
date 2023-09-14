const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjFmMDUwODg5ZTNmMzQxMjM2YTE0NmIyOGRiZDg4ZCIsInN1YiI6IjY0ZmVlZjc0ZGI0ZWQ2MTAzNjNlNTAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5EWxuDqA_N2X9M1mCRH0krJ6WCtORMxNDxWjkqE-a4",
        "Content-Type": "application/json;charset=utf-8",
    }
  }).then((result)=> result.json());
}

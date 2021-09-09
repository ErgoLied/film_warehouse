import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjEzNmRhYTVlZDBlODkxZTg4OTQ5ZTg2NDk5YjM4MiIsInN1YiI6IjYxMmY2ZWVkMzU3YzAwMDA0M2U2ODVlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mCYxKpqZDAfGGoeY7ch1BHRgPpbz7gnfH1bmGLaZx5M'
    }
});
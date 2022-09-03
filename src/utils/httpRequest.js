import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY2MjIyMjY4OCwiZXhwIjoxNjY0ODE0Njg4LCJuYmYiOjE2NjIyMjI2ODgsImp0aSI6Imx3aW9iMndsV3NYUGxsS1AiLCJzdWIiOjE4NywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.CzxndFWTgyGAD103zbXgnH32kA3UMxC-26FHJ11RT-g`,
  },
});

export const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};

export default httpRequest;

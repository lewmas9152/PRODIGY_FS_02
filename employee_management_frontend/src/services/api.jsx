import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchEmployees = () => API.get('/employees');
export const fetchEmployee = (id) => API.get(`/employees/${id}`);
export const createEmployee = (employeeData) => API.post('/employees', employeeData);
export const updateEmployee = (id, employeeData) => API.patch(`/employees/${id}`, employeeData);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);



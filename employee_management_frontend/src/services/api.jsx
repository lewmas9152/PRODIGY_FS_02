import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

API.interceptors.request.use((req) => {
  if (!req.url.startsWith('/login/') && !req.url.startsWith("/register")) {
    if (localStorage.getItem("profile")) {
      const profile = JSON.parse(localStorage.getItem("profile"));
      req.headers.Authorization = `Bearer ${profile.access}`;
    }
  }
  return req;
});

export const register = (formData) => API.post("/register/", formData);
export const login = (formData) => API.post("/login/", formData);
export const fetchEmployees = () => API.get("/employees");
export const fetchEmployee = (id) => API.get(`/employees/${id}`);
export const createEmployee = (employeeData) =>
  API.post("/employees/", employeeData);
export const updateEmployee = (id, employeeData) =>
  API.patch(`/employees/${id}/`, employeeData);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);
export const fetchDepartments = () => API.get("/departments");
export const fetchRoles = () => API.get("/roles");

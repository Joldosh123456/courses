import axios from "axios";
import { course } from "../constants/List";

const api = axios.create({
  baseURL: "https://6426d796d24d7e0de4799ee4.mockapi.io/api/v1"
})


export const getCourses = () => api.get<course[]>('/courses')
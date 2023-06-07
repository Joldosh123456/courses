import axios from "axios";
import { course } from "../constants/List";
import { post } from "../constants/Post";

const api = axios.create({
  baseURL: "https://6426d796d24d7e0de4799ee4.mockapi.io/api/v1"
})


export const getCourses = () => api.get<course[]>('/courses')

const apiPost = axios.create({
  baseURL: "https://647719bf9233e82dd53aed81.mockapi.io/api/v1/"
})


export const getPost = () => apiPost.get<post[]>('/Posts')
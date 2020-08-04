import axios from "axios";

const todoUrl = "https://5e9ec500fb467500166c4658.mockapi.io";

export default axios.create({
  baseURL: todoUrl,
  headers: {
    "Content-type": "application/json"
  }
});
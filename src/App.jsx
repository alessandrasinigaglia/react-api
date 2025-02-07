import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts").then(function (response) {
      console.log('i dati presi dalla chiamata', response.data)
    });
  };

  useEffect(fetchPosts, []);
}




import { Link, json } from "react-router-dom";
import SocialCard from "../components/SocialCard";

import { AddPostOn } from "../components/AddPostOn";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [apiResponse, setApiResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tsec-hacks.vercel.app/api/accounts/login",
          {
            method: "POST",
            body: json({
              email: "connect.siddhiraj@gmail.com",
              fname: "Siddhiraj R Kolwankar",
            }),
          }
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setApiResponse(data);

        console.log(data);

        localStorage.setItem("apiResponse", json(data));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div>
      <h1 className="text-blue-700">Index Page</h1>
      <p>This is the index page.</p>
    </div>
  );
}

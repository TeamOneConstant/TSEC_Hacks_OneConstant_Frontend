import { Link, json } from "react-router-dom";
import SocialCard from "../components/SocialCard";

import { AddPostOn } from "../components/AddPostOn";
import { useEffect, useState } from "react";
import axios from "axios";
import request from "superagent";

export default function IndexPage() {
  async function getPostUser() {
    try {
      const data = {
        email: "abhishekkhandare8@gmail.com",
        fname: "Abhishek Khandare",
      };
      const response = await axios.post(
        "https://tsec-hacks.vercel.app/api/accounts/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (e) {
      console.log(e);
    }

    // const request = new XMLHttpRequest();
    // request.open(
    //   "POST",
    //   "https://tsec-hacks.vercel.app/api/accounts/login",
    //   true
    // );
    // request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    // request.send(data);

    // request
    //   .post("https://tsec-hacks.vercel.app/api/accounts/login")
    //   .set("Content-Type", "application/x-www-form-urlencoded")
    //   .send({
    //     email: "abhishekkhandare8@gmail.com",
    //     fname: "Abhishek Khandare",
    //   })
    //   .end(function (err, res) {
    //     console.log(res.text);
    //   });

    // const response = await fetch(
    //   "https://tsec-hacks.vercel.app/api/accounts/login",
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: "abhishekkhandare8@gmail.com",
    //       fname: "Abhishek Khandare",
    //     }),
    //   }
    // );

    // console.log(response);
  }

  useEffect(() => {
    getPostUser();
  }, []);

  return (
    <div>
      <h1 className="text-blue-700">Index Page</h1>
      <p>This is the index page.</p>
    </div>
  );
}

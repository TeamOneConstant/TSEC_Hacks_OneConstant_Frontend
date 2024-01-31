import { Link, json } from "react-router-dom";
import SocialCard from "../components/SocialCard";
import { AddPostOn } from "../components/AddPostOn";
import { useEffect, useState } from "react";
import axios from "axios";
import request from "superagent";

export default function IndexPage() {
    return (
    <div>
      
       <h1 className="text-blue-700">Index Page</h1>
      <p>This is the index page.</p>
    </div>
  );
}

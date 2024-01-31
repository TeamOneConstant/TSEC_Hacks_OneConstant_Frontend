import { Link } from "react-router-dom";
import SocialCard from "../components/SocialCard";
import { Instagram } from "lucide-react";
import InstagramImg from "../assets/Instagram.png"
import { AddPostOn } from "../components/AddPostOn";

export default function IndexPage() {
  return (
    <div>
      <h1 className="text-blue-700">Index Page</h1>
      <p>This is the index page.</p>
      <AddPostOn SocialImage={InstagramImg} SocialName="Instagram" />

      <Link to={"/onboard"}>
        {/* <button>
          <span>OnBoarding</span>
        
        </button> */}
        {/* <SocialCard SocialIcon={Instagram} SocialName="Instagram" SocialImage={InstagramImg} onClick={() => {}}/> */}
        
      </Link>
      
    </div>
  );
}

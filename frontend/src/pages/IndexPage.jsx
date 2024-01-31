import { Link } from "react-router-dom";
import SocialCard from "../components/SocialCard";
import { AddPostOn } from "../components/AddPostOn";
import { UndelieveredPosts } from "../components/UndelieveredPosts";

export default function IndexPage() {
  return (
    <div>
      
      {/* <h1 className="text-blue-700">Index Page</h1>
      <p>This is the index page.</p>


      <Link to={"/onboard"}>
        <button>
          <span>OnBoarding</span>

        </button>

      </Link>
      <div style={{height: '50px'}}></div> */}

<UndelieveredPosts SocialName="Instagram" SocialImage="/Instagram.png" />

    </div>
  );
}

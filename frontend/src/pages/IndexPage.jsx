import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div>
      <h1 className="text-blue-700">Index Page</h1>
      <p>This is the index page.</p>

      <Link to={"/onboard"}>
        <button>
          <span>OnBoarding</span>
        </button>
      </Link>
    </div>
  );
}

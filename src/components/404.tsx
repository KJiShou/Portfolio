import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-[#21263d] overflow-hidden h-screen flex items-center justify-center text-white flex-col">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
      <p>
        Return to
        <Link to="/">
          <button className="mx-2 my-4 p-2 bg-violet-800 text-white rounded-md cursor-pointer hover:bg-violet-700 duration-200 transition-all">
            Homepage
          </button>
        </Link>
      </p>
    </div>
  );
}

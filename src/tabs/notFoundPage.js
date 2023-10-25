import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <p className="text-9xl text-center mb-8">404</p>
      <p className="text-2xl text-center mb-8">
        Sorry, we haven't found that page
      </p>
      <Link
        to="/"
        className="block w-24 h-12 mx-auto text-center pt-3 bg-teal-300 hover:bg-teal-400 transition-colors"
      >
        Go home
      </Link>
    </>
  );
};

export default NotFoundPage;

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h2>Page not found</h2>
      <p>
        Sorry, this page does not exist. Return back{" "}
        <Link to="/home">home</Link>.
      </p>
    </>
  );
};

export default NotFoundPage;

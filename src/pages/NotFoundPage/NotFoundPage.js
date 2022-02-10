import { Link } from "react-router-dom";
import { H2 } from "../../globalStyles";

const NotFoundPage = () => {
  return (
    <>
      <H2>Page not found</H2>
      <p>
        Sorry, this page does not exist. Return back{" "}
        <Link to="/home">home</Link>.
      </p>
    </>
  );
};

export default NotFoundPage;

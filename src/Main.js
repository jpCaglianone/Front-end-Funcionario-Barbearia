import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/style.css";
import Login from "./components/login";
import Rodape from "./components/rodape";

function Main() {
  return (
    <>
      <Login />

      <Rodape />
    </>
  );
}

export default Main;

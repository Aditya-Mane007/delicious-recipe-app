import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciouss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  text-align: center;
`;
const Nav = styled.div`
  padding: 2rem 0rem 0rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: cemter;
  svg {
    font-size: 3rem;
  }
`;
export default App;

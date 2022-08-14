import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + inputText);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 5rem 0rem;
  position: relative;
  width: 100%;
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

function Search() {
  const [searchRecipe, setSearchRecipe] = useState([]);

  let params = useParams();

  useEffect(() => {
    getRecipe(params.search);
  }, [params.search]);

  const getRecipe = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=10`
    );
    const data = await res.json();
    console.log(data.results);
    setSearchRecipe(data.results);
  };
  return (
    <Grid>
      {searchRecipe.map((item) => (
        <Card key={item.id}>
          <Link to={"/details/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Search;

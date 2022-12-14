import React from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  useEffect(() => {
    getCuisions(params.type);
    // console.log(params);
  }, [params.type]);
  const getCuisions = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`
    );
    const data = await res.json();
    console.log(data.results);
    setCuisine(data.results);
  };
  return (
    <Grid>
      {cuisine.map((item) => (
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

export default Cuisine;

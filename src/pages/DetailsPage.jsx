import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import styled from "styled-components";

function DetailsPage() {
  const [recipeDetail, setRecipeDetail] = useState({});
  const [active, setActive] = useState("instructions");

  let params = useParams();
  const recipeDetails = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.item}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    setRecipeDetail(data);
  };
  useEffect(() => {
    recipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.item]);
  return (
    <DetailWrapper>
      <div>
        <h2>{recipeDetail.title}</h2>
        <img src={recipeDetail.image} alt={recipeDetail.title} />
      </div>
      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : " "}
          onClick={() => setActive("ingredients")}
        >
          Ingredients
        </Button>
        {active === "instructions" && (
          <>
            <div>
              <h3
                dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}
              ></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: recipeDetail.instructions }}
              ></h3>
            </div>
          </>
        )}
        {active === "ingredients" && (
          <>
            <ul>
              {recipeDetail.extendedIngredients.map((ingre) => (
                <li key={ingre.id}>{ingre.original}</li>
              ))}
            </ul>
          </>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-around;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  width: 100%;
  margin-left: 5rem;
  font-size: 0.5rem;
`;

export default DetailsPage;

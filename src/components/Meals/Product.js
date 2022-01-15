import React, { useEffect, useState } from "react";
import { DUMMY_MEALS } from "../../data/data";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import media from "../../assets/media/media";

function Product() {
  const [data, setData] = useState(DUMMY_MEALS);
  const path = window.location.pathname;

  // \n <- New Line

  useEffect(() => {
    const pathId = path.substring(path.lastIndexOf("/") + 1);

    const filteredMeal = DUMMY_MEALS.filter((meal) => meal.id === pathId)[0];

    setData(filteredMeal);
  }, [path]);

  return (
    <Container>
      <NavLink to="/order/">
        <p className="goBack">Back</p>
      </NavLink>
      {data && (
        <>
          <div className="imageContainer">
            <img src={data.image} alt={data.name} />
          </div>

          <div className="textContent">
            <h2 className="name">{data.name}</h2>
            <p className="description">{data.description}</p>
            <p>
              Prepares for: <span>{data.prepareTime}</span> minutes
            </p>

            <h3>Ingredients: </h3>
            <ul className="ingredients">
              {data.ingredients &&
                data.ingredients.map((ingredient) => {
                  return (
                    <li>
                      {ingredient} <br />
                      <br />
                    </li>
                  );
                })}
            </ul>

            <h3>Instructions: </h3>
            <ul className="instructions">
              {data.instructions &&
                data.instructions.map((instruction) => {
                  return (
                    <li>
                      {instruction}
                      <br /> <br />
                    </li>
                  );
                })}
            </ul>
          </div>
        </>
      )}
    </Container>
  );
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  position: relative;

  .goBack {
    position: fixed;
    top: 85px;
    left: 0px;
    padding: 4px 10px;
    border: 1px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.5s;
    border-radius: 8px;

    &:hover {
      transition: all 0.5s;
      border: 2px solid ${(props) => props.theme.body};
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
    }

    ${media.tablet} {
      border: 2px solid ${(props) => props.theme.text};
      padding: 6px 12px;
      top: 85px;
      left: 20px;
    }
    ${media.desktop} {
      border: 2px solid ${(props) => props.theme.text};
      padding: 6px 12px;
      top: 85px;
      left: 20px;
    }
  }

  h3 {
    color: ${(props) => props.theme.thirdCol};
  }

  .description {
    color: ${(props) => props.theme.text};
    max-width: 600px;
    text-align: center;
    font-weight: 500;
  }
  .name {
    color: ${(props) => props.theme.orderTitle};
  }

  p {
    color: ${(props) => props.theme.text};
    span {
      color: ${(props) => props.theme.priceCol};
    }
  }

  .instructions {
    max-width: 600px;
    margin: 0px 20px;
    color: ${(props) => props.theme.text};
    li {
      list-style: disc;
    }
  }

  .ingredients {
    max-width: 400px;
    margin: 0px 20px;
    color: ${(props) => props.theme.text};
    li {
      list-style: disc;
    }
  }

  .textContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    padding: 20px 0px;

    img {
      width: 100%;
      height: 100%;
      max-width: 300px;
      border-radius: 20px;
    }
  }
`;

export default Product;

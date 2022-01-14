import styled from "styled-components";

export const MealsContainer = styled.section`
  max-width: 900px;
  width: 90%;
  margin: auto;
  padding: 0rem 0rem 2rem 0rem;
  animation: meals-appear 1s ease-out forwards;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

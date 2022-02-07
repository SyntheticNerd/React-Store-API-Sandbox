import styled from "styled-components";

export const ProductArrContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  flex-basis: content;
  padding: auto;
  &:after {
    width: fit-content;
  }
  /* @media (max-width: 700px) {
    padding: 0px;
  } */
`;
//challenge I cant get this to do what I want it to

export const SmallContainer = styled.div`
  width: 15em;
  height: 20em;
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  background: white;
  box-shadow: 2px 2px 5px black;
  overflow: none;
  opacity: 70%;
  transition: all 0.2s;
  position: relative;
  &:hover {
    scale: 1.1;
    opacity: 100%;
  }
`;

export const CardCartBtn = styled.button`
  position: absolute;
  right: 16px;
`;

//used a div instead of img to make use of background: url()
export const Thumbnail = styled.div`
  background: ${(props) =>
    props.url ? `url(${props.url}) center/contain no-repeat` : "red"};
  width: 100%;
  height: 60%;
  margin-bottom: 8px;
`;

export const PriceTag = styled.h1`
  line-height: 1.3em;
  width: fit-content;
`;

export const PriceTagSm = styled.p`
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.3em;
  padding: 0px 8px;
  min-width: 5em;
`;

export const PriceTagMd = styled.h3`
  line-height: 1.3em;
  padding: 0px 8px;
  min-width: 5em;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  /* margin: 0px 32px 0px 0px; */
  width: fit-content;
  flex-direction: column;
  position: relative;
  right: 0px;
  padding-right: 16px;
  /* @media (max-width: 800px) {
    f
    margin: 0px 0px 0px auto;
  } */
`;

export const ProductTitleShort = styled.h2`
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const ProductTitleCart = styled.h2`
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1.2em;
  overflow: hidden;
  flex: 1;
  /* display: -webkit-box; */
  /* -webkit-box-orient: vertical; */
  /* -webkit-line-clamp: 2; */
  /* there is an issue with webclamp i cant figure out 
  the elipses will not populate on line 2 stay on line 1*/
  height: 2.44em;
  width: 45%;
`;

export const FrontStars = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => `${props.width}%`};
  height: 30px;
`;

export const CartCardContainer = styled.div`
  background: white;
  height: 4em;
  width: 85%;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  margin: 8px auto;
  text-align: left;
  @media (max-width: 700px) {
    width: 100vw;
    padding: 0;
    margin: 8px 0px;
    border-radius: 0px;
  }
`;

export const CartImg = styled.img`
  /* width: 4em; */
  max-height: 3.5em;
  max-width: 3.5em;
`;

export const DelBtnStyle = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  width: fit-content;
  display: flex;
  align-content: center;
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : "0px 2px 2px rgba(0, 0, 0, 0.4)"};
  &:hover {
    box-shadow: ${(props) =>
      props.shadow === "none"
        ? props.shadow
        : "0px 2px 2px rgba(255, 0, 0, 0.4)"};
  }
`;

export const IncBtn = styled.button`
  width: 1.8em;
  @media (max-width: 580px) {
    width: 0px;
    display: none;
  }
`;

export const QuantityField = styled.input`
  width: 2em;
  border: none;
  text-align: center;
`;

export const NavBar = styled.nav`
  display: flex;
  width: 100vw;
  padding: 8px;
  padding-right: 24px;
  background: #2f2f2f;
  color: white;
  align-items: center;
  z-index: 3;
`;
export const Link = styled.a`
  color: white;
  text-decoration: none;
  line-height: 100%;
  font-size: 0.8em;
`;

export const NavLinkCont = styled.li`
  text-decoration: none;
  padding: 0px 16px;

  border-radius: 4px;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const DropDownCont = styled.div`
  z-index: 2;
  @media (max-width: 790px) {
    display: inline;
  }
`;
export const DropDownBtn = styled.a`
  display: none;
  color: white;
  text-decoration: none;
  line-height: 100%;
  font-size: 0.8em;
  @media (max-width: 790px) {
    display: inline;
  }
`;

export const NavListCont = styled.ul`
  display: flex;
  margin: 0px auto;
  width: auto;
  justify-content: space-around;
  list-style: none;
  @media (max-width: 790px) {
    display: flex;
    opacity: 0;
    pointer-events: none;
    flex-direction: column;
    position: absolute;
    background: #2f2f2f;
    width: fit-content;
    top: 30px;
    left: 65px;
    padding-bottom: 8px;
    padding-top: 10px;
    border-radius: 0px 0px 8px 8px;
    transition: all 0.5s;
    &:hover {
      display: flex;
    }
    ${DropDownCont}:hover & {
      opacity: 1;
      pointer-events: auto;
    }
    ${DropDownCont}:focus-within & {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

export const NavIcon = styled.button`
  margin: auto 32px;
  border: none;
  background: none;
  color: white;
`;

export const Vl = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  @media (max-width: 790px) {
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const CatBtn = styled.button`
  margin: 16px;
  height: 200px;
  width: 20vw;
  min-width: 155px;
  background: white;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
  opacity: 70%;
  &:hover {
    scale: 1.1;
    opacity: 100%;
  }
  @media (max-width: 750px) {
    width: 40vw;
  }
  @media (max-width: 410px) {
    width: 80vw;
    height: 120px;
  }
`;

export const IconCont = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px 0px auto;
  position: absolute;
  right: 16px;
`;

export const SearchField = styled.input`
  opacity: 0%;
  background: none;
  border: none;
  outline: none;
  color: white;
  margin-left: 8px;
  pointer-events: none;
  width: 100%;
  &:focus {
    opacity: 100%;
    pointer-events: auto;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 20px;
  transition: box-shadow 0s;
  z-index: 3;
  &:focus-within {
    transition: box-shadow 0.5s;
    position: absolute;
    margin-left: auto;
    transform: translate(-100%);
    width: 500px;
    max-width: 60vw;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.8),
      inset -2px -2px 2px rgba(117, 117, 117, 0.25);
    border-radius: 4px;
    background: #2f2f2f;
  }
`;

export const SBLabel = styled.label`
  display: flex;
  align-items: center;
  transition: opacity 1s;
  /* margin-left: auto; */
  ${SearchBar}:focus-within & {
    opacity: 50%;
    scale: 0.7;
  }
`;

export const HoverEffect = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: all 0.2s;
  &:hover {
    scale: 1.1;
    opacity: 1;
  }
`;

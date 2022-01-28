import styled from "styled-components";

export const ProductArrContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export const SmallContainer = styled.div`
  width: 15em;
  height: 20em;
  margin: 8px;
  padding: 16px;
  border-radius: 4px;
  background: white;
  box-shadow: 2px 2px 5px black;
  overflow: none;
  opacity: 90%;
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

export const FrontStars = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => `${props.width}%`};
  height: 30px;
`;

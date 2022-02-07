import {
  NavBar,
  Link,
  NavLinkCont,
  NavListCont,
  NavIcon,
  Vl,
  DropDownCont,
  DropDownBtn,
  IconCont,
  HoverEffect
} from "../styles/StyleComp";
import CartBtn from "./CartBtn";
import Search from "./Search";
import { ReactComponent as ProfileIcon } from "../img/profile.svg";
import { ReactComponent as SearchIcon } from "../img/search.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Nav() {
  const { cartQtty } = useContext(CartContext);
  return (
    <>
      <NavBar>
        <NavIcon>Logo</NavIcon>
        <DropDownCont>
          <DropDownBtn href="#">Catagories</DropDownBtn>
          <NavListCont>
            <Vl />
            <NavLinkCont>
              <Link href="#">Home</Link>
            </NavLinkCont>
            <Vl />
            <NavLinkCont>
              <Link href="#">Electronics</Link>
            </NavLinkCont>
            <Vl />
            <NavLinkCont>
              <Link href="#">Jewelery</Link>
            </NavLinkCont>
            <Vl />
            <NavLinkCont>
              <Link href="#">Men's Clothing</Link>
            </NavLinkCont>
            <Vl />
            <NavLinkCont>
              <Link href="#">Women's Clothing</Link>
            </NavLinkCont>
            <Vl />
          </NavListCont>
        </DropDownCont>
        <IconCont>
          <Search />
          <HoverEffect>
            <ProfileIcon style={{ margin: "0px 8px" }} />
          </HoverEffect>
          <HoverEffect>
            <CartBtn color="white" />
          </HoverEffect>
          <p>{cartQtty}</p>
        </IconCont>
      </NavBar>
    </>
  );
}

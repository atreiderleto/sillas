import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: white;
  padding: 0 80px 0 80px;
  align-items: center;
`;

const Nav = styled.nav`
  width: 40%;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5%;
  align-items: center;

  span {
    width: 100;
    height: 60;
  }
`;

const NavBar = () => {
  return (
    <Header>
      <span>
        <Image src="/logo.png" width={200} height={50} alt="logo" />
      </span>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>CHAIRS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>COMMERCIAL ALLIES</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </Nav>
      <Social>
        <span>
          <Image src="/facebook.png" width="40" height="40" alt="logo" />
        </span>
        <span>
          <Image src="/instagram.png" width="40" height="40" alt="logo" />
        </span>
      </Social>
    </Header>
  );
};

export default NavBar;

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Footers = styled.footer`
  background-color: white;
  margin-top: 10px;
  height: 400px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 85%;
  margin: 0 auto;
  padding-top: 90px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 900;
    font-size: 24px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding-top: 20px;
  }

  a {
    text-decoration: none;
    font-weight: 500;
  }
`;

const Conpany = styled.div`
  p {
    font-weight: 800;
  }
`;

const Footer = () => {
  return (
    <Footers>
      <Container>
        <Box>
          <p>COMPANY</p>
          <ul>
            <li>
              <Link href="/">
                <a> Profile </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> Contact </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> About </a>
              </Link>
            </li>
          </ul>
        </Box>
        <Box>
          <p>COMUNITY</p>
          <ul>
            <li>
              <Link href="/">
                <a> FACEBOOK </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> INSTAGRAM </a>
              </Link>
            </li>
          </ul>
        </Box>
        <Box>
          <p>RETURNS</p>
          <ul>
            <li>
              <Link href="/">
                <a> FAQs </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> SIZE GUIDE </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> CONTACT US </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> SELL WITHS </a>
              </Link>
            </li>
          </ul>
        </Box>
        <Conpany>
          <span>
            <Image src="/logo.png" width={300} height={100} alt="logo" />
          </span>
          <div>
            <p>Street Address: Av 30</p>
            <p>CL. 1000 20 -40, BOGOTA</p>
            <p>Postal: 110231</p>
          </div>
        </Conpany>
      </Container>
    </Footers>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <Image
    key={1}
    src="/s1.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    alt="chair"
    width={1920}
    height={700}
  />,
  <Image
    key={2}
    src="/s2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    alt="chair"
    width={1920}
    height={700}
  />,
  <Image
    key={3}
    src="/s3.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    alt="chair"
    width={1920}
    height={700}
  />,
];

const Anchor = styled.button`
  background-color: #81c881;
  height: 40px;
  width: 160px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
  position: absolute;
  top: 24rem;
  right: 59rem;
`;

const HeroHome = () => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        disableButtonsControls
        infinite
      />
      <Link href="/">
        <Anchor>Buy Now</Anchor>
      </Link>
    </>
  );
};

export default HeroHome;

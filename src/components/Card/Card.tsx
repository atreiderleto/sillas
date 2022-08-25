import Image from "next/image";
import styled from "styled-components";

const ContainerCard = styled.div`
  text-align: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.h4`
  background-color: white;
  font-size: 32px;
`;

interface CardProps {
  path: string;
  title: string;
}

const Card = ({ path, title }: CardProps) => {
  return (
    <ContainerCard>
      <Title>{title}</Title>
      <Image src={path} width={1200} height={1200} alt="c1" />
    </ContainerCard>
  );
};

export default Card;

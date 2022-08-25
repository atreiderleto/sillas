import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  margin-top: 20px;
  background-color: white;
  p {
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 0;
    padding-top: 20px;
  }
`;

const ContainerFeatureHome = styled.div`
  height: 300px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const FeatureHome = () => {
  return (
    <Container>
      <Title>
        <p>FEATURES</p>
      </Title>
      <ContainerFeatureHome>
        <div>
          <span>
            <Image src="/f1.png" width={300} height={300} alt="chair" />
          </span>
        </div>
        <div>
          <span>
            <Image src="/f2.png" width={300} height={300} alt="chair" />
          </span>
        </div>
        <div>
          <span>
            <Image src="/f3.png" width={300} height={300} alt="chair" />
          </span>
        </div>
      </ContainerFeatureHome>
    </Container>
  );
};

export default FeatureHome;

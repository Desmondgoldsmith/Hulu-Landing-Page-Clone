import Carousel from "@jjunyjjuny/react-carousel";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 480px;
`;
const Item = styled.div`
  background: #dbe4ff;
  text-align: center;
  font-size: 2rem;
  line-height: 145px;
  height: 150px;
  border-radius: 10px;
`;

const sampleArray = [1, 2, 3, 4, 6, 7, 8];
const CarouselSample = () => {
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Sample Carousel</h2>
      <Carousel itemCountPerPanel={3}>
        {sampleArray.map((el) => (
          <Item>{el}</Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselSample;
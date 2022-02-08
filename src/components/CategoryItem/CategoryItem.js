import styled from "styled-components";
const Title = styled.h3`
  color: white;
  align-self: center;
`;
const BackgroundTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 90%;
  height: 100px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -1;
  filter: brightness(0.7);
`;
const CategoryItem = ({ src }) => {
  return (
    <BackgroundTitle>
      <Title>Mojitos</Title>
      <Image src={require(src)} />
    </BackgroundTitle>
  );
};

export default CategoryItem;

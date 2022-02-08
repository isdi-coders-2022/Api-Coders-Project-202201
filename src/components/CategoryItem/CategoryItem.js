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
const CategoryItem = ({ category, src }) => {
  return (
    <BackgroundTitle className="CategoryItem">
      <Title className="CategoryItem__title">Mojitos</Title>
      <Image
        className="CategoryItem__image"
        src={require(src)}
        alt={category}
      />
    </BackgroundTitle>
  );
};

export default CategoryItem;

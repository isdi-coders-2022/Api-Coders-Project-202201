import styled from "styled-components";
const ExploreButton = styled.button`
  background-color: #7d4646;
  border: none;
  color: white;
  width: 100px;
  height: 50px;
  margin-top: 100px;
`;
const BackgroundPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 70vh;
  overflow: hidden;
`;
const Image = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
  z-index: -1;
  @media (min-width: 600px) {
    width: 100vw;
    height: auto;
    transform: translate(0, -300px);
  }
`;

const SimpleText = styled.p`
  margin-top: 100px;
  color: white;
  width: 80%;
`;

const HomePage = () => {
  return (
    <>
      <BackgroundPage>
        <SimpleText>
          Because everything starts with a drink , explore ours
        </SimpleText>
        <ExploreButton>Let's see</ExploreButton>
        <Image
          className="HomePage__background"
          src="images/background-home.jpg"
          alt="background-cocktails"
        />
      </BackgroundPage>
      <h2>Categories</h2>
    </>
  );
};

export default HomePage;
import Button from "../../components/Button/Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: 50px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
`;

const FormMyBarPage = () => {
  return (
    <>
      <h2>Create a cocktail</h2>

      <Form>
        <label forhtml="name" className="form-label">
          Name your cocktail:
        </label>
        <Input
          type="text"
          id="name"
          placeholder="Marta's Cocktail"
          onChange={""}
        />

        <label forhtml="src" className="form-label">
          Image URL:
        </label>
        <Input
          type="text"
          id="src"
          placeholder="https://martascocktail.com/image.jpg"
          onChange={""}
        />

        <label forhtml="category" className="form-label">
          Category:
        </label>
        <Input type="text" id="category" placeholder="Cocoa" onChange={""} />

        <label forhtml="name" className="form-label">
          Ingredients:
        </label>
        <Input
          type="text"
          id="name"
          placeholder="Marta's Cocktail"
          onChange={""}
        />

        <label forhtml="perparation" className="form-label">
          Preparation:
        </label>
        <TextArea
          id="perparation"
          rows="10"
          cols="30"
          placeholder="First add a little bit of sugar into..."
        ></TextArea>

        <label forhtml="alcohol" className="form-label">
          Alcohol:
        </label>
        <Input type="checkbox" id="alcohol" onChange={""} />

        <Button type="simple" text="Create" action={""} />
      </Form>
    </>
  );
};

export default FormMyBarPage;

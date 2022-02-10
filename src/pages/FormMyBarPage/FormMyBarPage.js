import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: 50px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
`;

const FormMyBarPage = () => {
  return (
    <>
      <h2>Create a cocktail</h2>

      <Form onSubmit={""} autoComplete="off" novalidate>
        <Label forhtml="name" className="form-label">
          Name your cocktail:
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Marta's Cocktail"
          onChange={""}
        />

        <Label forhtml="src" className="form-label">
          Image URL:
        </Label>
        <Input
          type="text"
          id="src"
          placeholder="https://martascocktail.com/image.jpg"
          onChange={""}
        />

        <Label forhtml="category" className="form-label">
          Category:
        </Label>
        <Input type="text" id="category" placeholder="Cocoa" onChange={""} />

        <Label forhtml="name" className="form-label">
          Ingredients:
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Marta's Cocktail"
          onChange={""}
        />

        <Label forhtml="perparation" className="form-label">
          Preparation:
        </Label>
        <TextArea
          id="perparation"
          rows="10"
          cols="30"
          placeholder="First add a little bit of sugar into..."
        ></TextArea>

        <Label forhtml="alcohol" className="form-label">
          Alcohol:
        </Label>
        <Input type="checkbox" id="alcohol" onChange={""} />

        <button type="submit">Create</button>
      </Form>
    </>
  );
};

export default FormMyBarPage;

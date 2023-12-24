import PropTypes from "prop-types";
import { Container, Input } from "./styles";

export default function InputForm({ type, name, id, placeholder, onChange, className, htmlFor, labelText }) {
  return (
    <>
      <Container>
        <label htmlFor={htmlFor}>{labelText}</label>
      </Container>

      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />

    </>

  );
}

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

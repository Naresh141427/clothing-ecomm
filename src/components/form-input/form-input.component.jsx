import { FromInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherprops }) => {
  return (
    <Group>
      <Input {...otherprops} />
      {label && (
        <FromInputLabel shrink={otherprops.value.length}>
          {label}
        </FromInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

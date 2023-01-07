import styled from "styled-components";

const accentColor = "#ff00ff";
const Button = styled.button`
  background-color: ${accentColor};
  color: white;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
  border: none;
  padding: 10px 20px;
  &:hover {
    ${(props) =>
      props.variant === "primary"
        ? {
            backgroundColor: "transparent",
            color: accentColor,
            border: `1px solid ${accentColor}`,
          }
        : { backgroundColor: "red", color: "white" }};
`;

export default Button;

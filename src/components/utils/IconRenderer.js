import sprites from "../../assets/sprites.svg";

export const IconRenderer = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${sprites}#${id}`} />
    </svg>
  );
};

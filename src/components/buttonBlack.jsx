import Button from "react-bootstrap/Button";
import "../styles/buttonBlack.scss";
const ButtonBlack = ({children, buttonIcon, className,handleSubmit }) => {

  return (
    <>
      <Button onClick={handleSubmit} className={`${className} w-100`} bsPrefix="buttonBlack">
         {children} {buttonIcon}
      </Button>
    </>
  );
};

export default ButtonBlack;

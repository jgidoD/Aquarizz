import "./Button.css";

const Button = ({ type, variant, icon, className, onClick, children }) => {
  return (
    <button
      className={className}
      type={type ? type : "button"}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;

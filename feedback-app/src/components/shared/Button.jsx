function Button({ children, version, type, isDisabled }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${isDisabled ? "primary" : "secondary"}`}
    >
      {children}
    </button>
  );
}

export default Button;

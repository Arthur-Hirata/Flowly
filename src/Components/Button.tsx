interface ButtonProps{
    children?: React.ReactNode,
    variant: "primary" | "secondary"
    onClick?: () => void
}
function Button({ children, variant = "primary",  onClick } : ButtonProps){
    return(
        <button
      onClick={onClick}
      className={`${
        variant === "primary"
          ? "bg-primary"
          : "bg-primary"
      } rounded-2xl w-30 h-7 hover:transition-transform duration-300 ease-in-out hover:scale-105` }
    >
      {children}
    </button>
    )
}
export default Button
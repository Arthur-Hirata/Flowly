interface ButtonProps{
    children?: React.ReactNode,
    variant: "primary" | "secondary"
    onClick?: () => void
    className?: string
}
function Button({ className ,children, variant = "primary",  onClick } : ButtonProps){
    return(
        <button
      onClick={onClick}
      className={`${
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-primary  text-white"
      } rounded-2xl w-50 h-7 hover:transition-transform duration-300 ease-in-out hover:scale-105 ${className}` }
    >
      {children}
    </button>
    )
}
export default Button
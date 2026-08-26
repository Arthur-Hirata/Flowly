import { useState } from "react"

interface FaqCardProps{
    title : string
    children : string
}
function FaqCard({title, children} : FaqCardProps){
    const [isClosed, setIsClosed] = useState(true)

    function toggleCard(){
        setIsClosed((currentState) => !currentState)
    }
    return (
        <div className="group flex w-180 flex-col items-center overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm">
            <span className="text-center text-3xl font-medium">{title}</span>
            <button
                onClick={toggleCard}
                className="mt-1 self-end text-3xl hover:transition-transform duration-300 ease-in-out hover:scale-110"
                aria-expanded={!isClosed}
            >
            {isClosed ? "⌄" : "^"}
            </button>

  <div
    className={`grid transition-all duration-400 ease-in-out ${
      isClosed
        ? "grid-rows-[0fr] opacity-0"
        : "grid-rows-[1fr] opacity-100"
    }`}
  >
    <div className="overflow-hidden">
      <hr className="my-4 w-full border-border" />
      <span className="block text-center text-sm text-muted">
        {children}
      </span>
    </div>
  </div>
</div>
    )
}
export default FaqCard
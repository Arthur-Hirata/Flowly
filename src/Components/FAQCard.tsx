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
        <div className="group flex flex-col items-center w-180 h-30 rounded-xl border border-border bg-card p-6 shadow-sm transition-all ">
            <span className="text-center text-3xl font-bold">{title}</span>
            <button onClick={toggleCard}>{isClosed ? "⌄" : "^"}</button>
            {!isClosed && (
                <div className="mt-6 flex flex-col items-center">
                    <span className="text-center text-sm text-muted">{children}</span>
                </div>
            )}
        </div>
    )
}
export default FaqCard
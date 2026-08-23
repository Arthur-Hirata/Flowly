interface HowWorksCardPropos {
    tittle: string
    children:string
}
function HowWorkCard({tittle, children} : HowWorksCardPropos){
    return (
        <div className="w-90 h-70 bg--card border border-border rounded-b-md">
            <span>{tittle}</span>
            <span>{children}</span>
        </div>
    )
}
export default HowWorkCard
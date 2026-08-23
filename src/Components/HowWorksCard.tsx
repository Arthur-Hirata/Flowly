interface HowWorksCardPropos {
    tittle: string
    children:string
}
function HowWorkCard({tittle, children} : HowWorksCardPropos){
    return (
        <div className="flex h-40 w-full flex-col items-center gap-2 rounded-b-md border border-border bg-card p-6 text-center">
            <span className="font-bold">{tittle}</span>
            <span className="text-center text-muted">{children}</span>
        </div>
    )
}
export default HowWorkCard
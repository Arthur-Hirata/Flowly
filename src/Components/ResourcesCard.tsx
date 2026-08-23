interface ResourcesCardProps{
    tittle: string
    children: string
}
function ResourcesCard({tittle, children}: ResourcesCardProps){
    return(
        <div className="group flex min-h-70 w-full max-w-70 flex-col justify-center rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
            <span className="text-center text-2xl font-bold leading-tight text-text transition-transform duration-300 group-hover:scale-[1.03]">{tittle}</span>
            <span className="mt-6 text-center text-sm leading-6 text-muted">{children}</span>
        </div>
    )
}
export default ResourcesCard
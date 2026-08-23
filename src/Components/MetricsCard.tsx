interface MetricsCardProps {
    tittle: string
    children:string
}


function MetricsCard({tittle, children} : MetricsCardProps){
    return(
        <div className="w-70 h-60 rounded-md bg-card flex flex-col justify-items-center items-center">
            <span className="font-bold text-7xl mt-20 text-hover">{tittle}</span>
            <span className="mt-10">{children}</span>
        </div>
    )
}
export default MetricsCard
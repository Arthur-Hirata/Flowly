import Button from "./Button"

interface PriceCardProps {
    tittle : string
    price : string
    sub: string
    planList : string[]
    buttonText : string
}

function PriceCard({tittle, price, sub, planList, buttonText} : PriceCardProps){
    return(
        <div className="w-90 h-130 rounded-md bg-card flex flex-col gap-10 items-center hover:transition-transform duration-300 ease-in-out hover:scale-105 border border-border">
            <span className="font-bold text-5xl mt-10">{tittle}</span>
            <span className="text-primary"> R$ {price}/mês</span>
            <span className="text-muted text-center">{sub}</span>
            <ul className="flex flex-col gap-2 list-disc absolute mt-65">
                {planList.map((plan) => (
                    <li className="text-center">{plan}</li>
                ))}
            </ul>
            <Button children={buttonText} variant="primary" className="absolute mt-114"/>
        </div>
    )
}
export default PriceCard
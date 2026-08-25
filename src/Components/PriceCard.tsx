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
        <div className="w-90 h-130 rounded-md bg-card border border-border flex flex-col gap-10 items-center">
            <span className="font-bold text-5xl mt-10">{tittle}</span>
            <span className="text-primary"> R$ {price}/mês</span>
            <span className="text-muted">{sub}</span>
            <div className="flex flex-col gap-5">
                {planList.map((plan) => (
                    <td>{plan}</td>
                ))}
            </div>
            <Button children={buttonText} variant="primary"/>
        </div>
    )
}
export default PriceCard
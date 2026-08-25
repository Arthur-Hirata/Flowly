import SectionTittle from "../Components/SectionTittle"
import PriceCard from "../Components/PriceCard"
function Price(){
    const planList = [
        'Até 3 projetos',
        'Até 2 usuários',
        'Tarefas ilimitadas',
        'Dashboard básico'
    ]
    return (
        <div id="Preços" className="flex flex-col justify-items-center items-center mt-30 gap-10 h-screen">
            <SectionTittle  children="Preços"/>
            <span className="text-center text-xl text-muted">Escolha o plano ideal para sua equipe.</span>
            <div className="flex flex-row justify-center items-center gap-20">
                <PriceCard tittle="Free" price="0" sub="Para começar a organizar seus projetos." planList={planList} buttonText="Começar grátis"/>
                <PriceCard tittle="Free" price="0" sub="Para começar a organizar seus projetos." planList={planList} buttonText="Começar grátis"/>
                <PriceCard tittle="Free" price="0" sub="Para começar a organizar seus projetos." planList={planList} buttonText="Começar grátis"/>

            </div>
        </div>
    )
}
export default Price
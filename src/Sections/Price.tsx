import SectionTittle from "../Components/SectionTittle"
import PriceCard from "../Components/PriceCard"
function Price(){
    const plans = [
        {tittle: "Free", price : "0", sub : "Para começar a organizar seus projetos.", planList : ['Até 3 projetos','Até 2 usuários','Tarefas ilimitadas','Dashboard básico'], buttonText : "Começar grátis"},
        {tittle : "Pro", price : "29", sub : "Para equipes que querem ir além.", planList : ['Projetos ilimitados', 'Até 10 usuários', 'Dashboard completo', 'Metas e relatórios', 'Automações'], buttonText : "Começar agora"},
        {tittle : "Business", price : "79", sub : "Para equipes que precisam de mais controle.", planList:['Usuários ilimitados', 'Projetos ilimitados', 'Relatórios avançados', 'Automações ilimitadas', 'Suporte prioritário'], buttonText :"Falar com vendas"}
    ]
    return (
        <div id="Preços" className="flex flex-col justify-items-center items-center mt-30 gap-10 h-screen w-90 md:w-full">
            <SectionTittle  children="Preços"/>
            <span className="text-center text-xl text-muted">Escolha o plano ideal para sua equipe.</span>
            <div className="flex flex-col justify-center items-center gap-20 md:flex-row">
                {plans.map((plan)=> (
                    <PriceCard buttonText={plan.buttonText} price={plan.price} sub={plan.sub} planList={plan.planList} tittle={plan.tittle}/>
                ))}
            </div>
        </div>
    )
}
export default Price
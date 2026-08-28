import SectionTittle from "../Components/SectionTittle"
import DepoimentsCard from "../Components/DepoimentsCard"
function Depoiments () {
    const Depoiments =[
        {name : "Ana Martins", content : "O Flowly deixou nossa organização muito mais simples. Agora conseguimos acompanhar todos os projetos sem precisar de várias ferramentas diferentes.", firm: "Product Designer — Studio Nova"},
        {name : "Lucas Almeida", content : "Finalmente encontramos uma ferramenta que é poderosa sem ser complicada. Nossa equipe começou a usar em poucos minutos.", firm : "Founder — BrightLabs"},
        {name : "Marina Costa", content : "A visão de progresso dos projetos é incrível. Consigo saber exatamente onde minha equipe está sem precisar perguntar para cada pessoa.", firm : "Project Manager — Orbit"}
    ]
    return (
        <div className="flex flex-col justify-center items-center mt-30">
            <SectionTittle children="Avaliações" />
            <div className="flex flex-col justify-around items-center gap-30 md:flex-row">
            <div className="flex flex-col gap-10 mt-10">
                {Depoiments.map((depoiment) => (
                    <DepoimentsCard  name={depoiment.name} content={depoiment.content} firm={depoiment.firm}/>
                ))}
            </div>
            <span className="text-5xl text-center font-bold text-primary flex flex-col gap-3">
                <span className="text-9xl ">4.9/5</span> <br />
            Avaliação média
            </span>
            </div>
        </div>
    )
}
export default Depoiments
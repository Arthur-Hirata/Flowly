import MetricsCard from "../Components/MetricsCard"
function Metrics(){
    return(
        <div className="flex flex-col mt-30 gap-10 w-auto justify-itens-center items-center">
            <span className="text-center font-bold text-3xl">Feito para equipes que querem fazer mais</span>
            <div className="flex flex-row gap-30">
                <MetricsCard children="Projetos Criados" tittle="+10K"/>
                <MetricsCard children="Usuários ativos" tittle="+25k"/>
                <MetricsCard children="Avaliação média" tittle="4.9/5"/>
            </div>
        </div>
    )

}
export default Metrics
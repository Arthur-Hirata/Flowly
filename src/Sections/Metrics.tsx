import MetricsCard from "../Components/MetricsCard"
import SectionTittle from "../Components/SectionTittle"
function Metrics(){
    return(
        <div className="flex flex-col mt-30 gap-10 w-auto justify-itens-center items-center">
            <SectionTittle children="Feito para equipes que querem fazer mais" />
            <div className="flex flex-col gap-10 md:flex-row md:gap-20 xl:gap-30">
                <MetricsCard children="Projetos Criados" tittle="+10K"/>
                <MetricsCard children="Usuários ativos" tittle="+25k"/>
                <MetricsCard children="Avaliação média" tittle="4.9/5"/>
            </div>
        </div>
    )

}
export default Metrics
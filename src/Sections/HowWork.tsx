import SectionTittle from "../Components/SectionTittle"
import HowWorkCard from "../Components/HowWorksCard"

function HowWork(){
    return (
        <div id="Como-funciona" className="mx-auto mt-30 flex w-full max-w-7xl flex-col gap-10 px-6">
            <SectionTittle children="Como Funciona?"/>
            <span className="text-center text-xl text-muted">Comece a organizar seu trabalho em 3 passos.</span>
                <div className="flex flex-col gap-20 justify-items-center items-center md:flex-row md:gap-0">
                        <HowWorkCard children="Crie um workspace para sua equipe e reúna todos os seus projetos em um único lugar." tittle="01 — Crie seu espaço" />
                        <hr className="w-40 flex justify-items-center items-center text-gray-600 rotate-90 md:rotate-0 md:w-50"/>                       
                        <HowWorkCard children="Divida seus projetos em tarefas, defina responsáveis e estabeleça prazos" tittle="02 — Organize suas tarefas" />
                        <hr className="w-40 flex justify-items-center items-center text-gray-600 rotate-90 md:rotate-0 md:w-50"/>
                        <HowWorkCard children="Veja seu progresso em tempo real e descubra o que está impedindo sua equipe de avançar." tittle="03 — Acompanhe os resultados" />
                </div>
        </div>
    )
}
export default HowWork
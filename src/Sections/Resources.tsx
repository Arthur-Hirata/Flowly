import SectionTittle from "../Components/SectionTittle"
import ResourcesCard from "../Components/ResourcesCard"

function Resources(){
    return(
        <div className="flex flex-col mt-30 gap-10  justify-itens-center items-center">
            <SectionTittle children="Tudo o que você precisa para manter seus projetos no caminho certo."/>
            <span className="text-center text-xl text-muted">Ferramentas simples e poderosas para transformar ideias em resultados.</span>
            <div className="grid grid-cols-3 gap-20">
                <ResourcesCard children="Crie, organize e acompanhe suas tarefas sem perder tempo procurando o que precisa ser feito." tittle="📋 Gerencie suas tarefas"/>
                <ResourcesCard children="Tenha uma visão clara do andamento dos seus projetos e saiba exatamente o que precisa de atenção." tittle="📊 Acompanhe seu progresso"/>
                <ResourcesCard children="Colabore com sua equipe, distribua responsabilidades e mantenha todos alinhados." tittle="👥 Trabalhe em equipe"/>
                <ResourcesCard children="Transforme seus objetivos em metas claras e acompanhe sua evolução ao longo do tempo." tittle="🎯 Defina metas"/>
                <ResourcesCard children="Receba lembretes e mantenha suas entregas dentro do prazo." tittle="🔔 Nunca perca um prazo"/>
                <ResourcesCard children="Simplifique tarefas repetitivas e concentre sua energia no que realmente importa." tittle="⚡ Automatize seu trabalho"/>
            </div>
        </div>
    )
}
export default Resources
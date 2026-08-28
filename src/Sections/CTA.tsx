import SectionTittle from "../Components/SectionTittle"
import Button from "../Components/Button"
function CTA(){
    return(
        <div className="flex flex-col justify-center items-center mt-20 bg-card w-90 h-110 rounded-md border border-border md:w-160">
        <div className="flex flex-col justify-center items-center mt-20 ">
            <SectionTittle children="Pronto para organizar seu trabalho?"/>
            <span className="text-muted mt-10 text-1xl text-center">Junte suas tarefas, projetos e objetivos em um só lugar.</span>
            <Button variant="primary" children="Começar grátis →" className="w-80 h-10 mt-20 md:w-100"/>
            <span className="text-muted text-sm mt-4 text-center">Comece agora. Não é necessário cartão de crédito.</span>
        </div>
        </div>
    )
}
export default CTA

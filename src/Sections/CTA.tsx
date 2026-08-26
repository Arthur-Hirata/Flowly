import SectionTittle from "../Components/SectionTittle"
import Button from "../Components/Button"
function CTA(){
    return(
        <div className="flex flex-col justify-center items-center mt-20 bg-card w-160 h-100 rounded-md border border-border">

        <div className="flex flex-col justify-center items-center mt-20 ">
            <SectionTittle children="Pronto para organizar seu trabalho?"/>
            <span className="text-muted mt-10 text-1xl">Junte suas tarefas, projetos e objetivos em um só lugar.</span>
            <Button variant="primary" children="Começar grátis →" className="w-100 h-10 mt-20"/>
            <span className="text-muted text-sm mt-4">Comece agora. Não é necessário cartão de crédito.</span>
        </div>
        </div>
    )
}
export default CTA

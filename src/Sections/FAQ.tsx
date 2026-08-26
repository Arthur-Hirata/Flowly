import SectionTittle from "../Components/SectionTittle"
import FaqCard from "../Components/FAQCard"
function FAQ(){
    return (
        <div id="Faq" className="flex flex-col justify-center items-center">
            <SectionTittle children="Perguntas Frequentes"/>
            <div className="flex flex-col justify-center mt-20 gap-20">
                                <FaqCard title="O Flowly possui plano gratuito?" children="Sim. O plano gratuito permite que você crie projetos e organize suas tarefas sem pagar nada."/>

                <FaqCard title="O Flowly possui plano gratuito?" children="Sim. O plano gratuito permite que você crie projetos e organize suas tarefas sem pagar nada."/>
            </div>
        </div>
    )
}
export default FAQ
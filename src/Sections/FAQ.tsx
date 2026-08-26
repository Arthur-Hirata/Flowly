import SectionTittle from "../Components/SectionTittle"
import FaqCard from "../Components/FAQCard"
function FAQ(){
    const FAQs = [
        {title: "O Flowly possui plano gratuito?", content : "Sim. O plano gratuito permite que você crie projetos e organize suas tarefas sem pagar nada."},
        {title : "Preciso instalar algum programa?", content : "Não. O Flowly funciona diretamente no navegador."},
        {title : "Posso convidar minha equipe?", content : "Sim. Dependendo do plano escolhido, você pode convidar diferentes quantidades de usuários."},
        {title: "Posso cancelar minha assinatura?", content : "Sim. Você pode cancelar seu plano a qualquer momento."},
        {title : "Existe período de teste?", content : "Sim. O plano Pro possui um período de teste gratuito de 14 dias."}
    ]
    return (
        <div id="Faq" className="flex flex-col justify-center items-center mt-20">
            <SectionTittle children="Perguntas Frequentes"/>
            <div className="flex flex-row justify-around items-center gap-20">
                <div className="flex flex-col justify-center mt-20 gap-5">
                    {FAQs.map((FAQ) => (
                        <FaqCard title={FAQ.title} children={FAQ.content}/>
                    ))}
                </div>
                <div className="w-110">
                    <span className="text-center flex items-center text-3xl font-semibold">Caso tenha outra dúvida, contate o suporte!</span>
                </div>
            </div>
        </div>
    )
}
export default FAQ
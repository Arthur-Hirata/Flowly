import SectionTittle from "../Components/SectionTittle"
function Spotlight(){
    const destaques =[
        {text : "✅ Saiba o que está sendo feito"},
        {text: "✅ Identifique tarefas atrasadas"},
        {text : "✅ Acompanhe o desempenho da equipe"},
        {text : "✅ Veja seus próximos prazos"}

    ]
    return (
        <div className="flex flex-col items-center justify-items-center mt-30 gap-10">
            <SectionTittle children="Tenha uma visão completa do seu trabalho."/>
            <span className="text-muted">De pequenas tarefas a grandes projetos, o Flowly ajuda você a entender exatamente o que está acontecendo.</span>

            <div className="bg-card w-200 h-80 rounded-md border border-border flex flex-col justify-items-center items-center">
                {destaques.map((destaque) => (
                    <span className="text-2xl">{destaque.text}</span>
                ))}
            </div>
       
        </div>
    )
}
export default Spotlight
import Button from "./Button"


function Hero(){
    return (
        <div className="flex justify-center itens-center mt-20 gap-30">
            <div className="font-bold flex-col w-200">
                <span className="text-center">Organize seu trabalho de uma nova forma</span>
                <span className="text-5xl">Menos tarefas perdidasMais projetos concluídos</span>
                <span>O Flowly reúne tarefas, projetos e metas em um só lugar para que sua equipe possa trabalhar melhor, acompanhar o progresso e alcançar seus objetivos.</span>
                <div className="flex-row">
                    <Button
                        variant="primary"
                        children="Começar grátis"
                    />
                    <Button 
                        variant="primary"
                        children="Ver como funciona"
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero
import Button from "../Components/Button"


function Hero(){
    return (
        <div className="flex flex-col justify-center itens-center mt-20 gap-30 md:flex-row ml-10 xl:flex-row">
            <div className="flex flex-col items-start gap-6">
                <span className=" max-w-xl -ml-4 font-bold text-primary md:ml-0">
                    Organize seu trabalho de uma nova forma
                </span>

                <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
                    Menos tarefas perdidas.
                    <br />
                    Mais projetos concluídos.
                </h2>

                <p className="max-w-lg text-muted">
                    O Flowly reúne tarefas, projetos e metas em um só lugar
                    para que sua equipe possa trabalhar melhor, acompanhar o
                    progresso e alcançar seus objetivos.
                </p>

                <div className=" flex flex-wrap  justify-center -ml-5 gap-4 md:ml-0">
                    <Button variant="primary">
                        Começar grátis
                    </Button>

                    <Button variant="primary">
                        Ver como funciona ↗
                    </Button>
                </div>
            </div>
            <div className="bg-gray-800 w-80 rounded-2xl text-white md:w-130 ">
                <div className="mt-3 ml-2 flex-row">
                    <span className="font-bold text-2xl">Flowly</span>
                    <i className="fas fa-bell ml-40 text-red-500 md:ml-60 xl:ml-90"></i>
                    <i className="fas fa-user text-blue-500 ml-5"></i>
                </div>
                <hr  className="mt-3  border-gray-600"/>
                <div className="flex min-h-100 flex-row ml-3 mt-3">
                    <div className="flex w-1/3 flex-col gap-7 border-r border-gray-600 pr-4 pt-10">
                        <span>Dashboard</span>
                        <span>Projetos</span>
                        <span>Tarefas</span>
                        <span>Equipe</span>
                        <span>Config</span>
                    </div>
                    <div className="flex-1 p-6">
                        <span className="font-bold">Bom dia, Marcos!</span>
                        <div className="mt-15">
                            <span>Progresso diário</span>
                            <div className="mt-3 h-3 w-3/4 overflow-hidden rounded-full bg-gray-600">
                                <div className="h-full w-3/4 rounded-full bg-primary"></div>
                            </div>
                                <span className="mt-2 block text-sm text-gray-300">75% concluído</span>
                        </div>
                        <div className="flex flex-col mt-20">
                            <span>💻 10 Tasks</span>
                            <span>🚀 3 Projetos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
import Button from "./Button"
function Navbar() {
    return (
        <nav className="bg-card mx-auto flex h-13 w-4/5 rounded-4xl justify-items-center items-center pl-4 gap-50 border border-border  ">
            <h1 className="text-2xl font-bold">Flowly</h1>
            <div className="gap-20 flex font-bold">
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Recursos</span>
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Como funciona</span>
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Preços</span>
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">FAQ</span>
            </div>
            <Button 
            variant="primary"
            onClick={() => console.log("clicou")} children={"Entrar"}></Button>
        </nav>
    )
}
export default Navbar
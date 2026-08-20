import Button from "./Button"
function Navbar() {
    return (
        <nav className="bg-secondary mx-auto flex h-10 w-4/5 rounded-4xl justify-items-center items-center pl-4 gap-50">
            <h1 className="text-2xl font-bold">Flowly</h1>
            <div className="gap-20 flex font-bold">
                <span>Recursos</span>
                <span>Como funciona</span>
                <span>Preços</span>
                <span>FAQ</span>
            </div>
            <Button 
            variant="primary"
            onClick={() => console.log("clicou")} children={"Entrar"}></Button>
        </nav>
    )
}
export default Navbar
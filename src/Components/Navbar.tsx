import Button from "./Button"
function Navbar() {
    return (
        <nav className="bg-card flex h-20 w-screen justify-between items-center pl-4 pr-4 border border-border static  ">
            <h1 className="text-4xl font-bold">Flowly</h1>
            <div className="gap-25 flex font-bold">
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Recursos</span>
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Como funciona</span>
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Preços</span>
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">FAQ</span>
            </div>
            <div className="flex gap-5 items-center ">
            <Button 
            variant="primary"
            children={"Entrar"}></Button>
            <i className="fas fa-sun text-2xl hover:transition-transform durantion-300 ease-in-out hover:scale-105" ></i>
            </div>
        </nav>
    )
}
export default Navbar
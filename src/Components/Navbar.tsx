
import { useState } from "react";
function getInitialTheme (){
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}
function Navbar() {
    const [theme, setTheme] = useState(getInitialTheme)
    document.documentElement.setAttribute("data-theme", theme)
    const icon = theme === "dark" ? "fa-sun" : "fa-moon"

    function changeTheme(){
        const nextTheme = theme === "dark" ? "ligth" : "dark"
        setTheme(nextTheme)
        localStorage.setItem("theme", nextTheme)
    }
    return (
        <nav className="bg-card flex h-20 w-full justify-between items-center pl-4 pr-4 border border-border static  ">
            <h1 className="text-4xl font-bold">Flowly</h1>
            <div className="gap-25 flex font-bold">
                <a href="#resources"><span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Recursos</span></a>
                <a href="#Como-funciona"><span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Como funciona</span></a>
                <a href="#Preços"><span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">Preços</span></a>
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hover">FAQ</span>
            </div>
            <div className="flex gap-5 items-center ">
            <button className="bg-primary rounded-2xl w-30 h-7 hover:transition-transform duration-300 ease-in-out hover:scale-105">
                Entrar
            </button>
            <i className={`fas ${icon} text-2xl hover:transition-transform durantion-300 ease-in-out hover:scale-105`} onClick={changeTheme}></i>
            </div>
        </nav>
    )
}
export default Navbar   
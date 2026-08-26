

function Footer(){
    const Socials = [
        {link : "https://github.com/Arthur-Hirata", icon : "fa-brands fa-github" },
        {link : "https://www.linkedin.com/in/arthur-duarte-hirata/", icon :"fa-brands fa-linkedin"},
    ]
    return (
        <div className="w-full h-35 mt-30 bg-card flex flex-col justify-center items-center">
            <span className="text-2xl font-bold">Flowly</span>
            <div className="flex flex-row gap-4 mt-3">
                {Socials.map((social) => (
                    <a href={social.link} rel="noreferrer"aria-label="Rede social" target="_blank"><i className={`${social.icon} inline-block w-10 text-2xl hover:transition-transform duration-300 hover:scale-110`}></i></a>
                ))}
            </div>
            <span className="text-muted mt-3">© 2026 Flowly. Todos os direitos reservados.</span>
        </div>
    )
}
export default Footer
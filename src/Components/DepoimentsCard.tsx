
interface DepoimentsCardProps{
    name : string
    content : string
    firm : string
}

function DepoimentsCard ({name, content, firm} : DepoimentsCardProps){
    return (
        <article className="group w-full max-w-2xl rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 ">
      <div className="mb-4 flex items-start justify-between">
        <span className="text-4xl leading-none text-primary">“</span>
      </div>

      <p className="text-lg leading-relaxed text-text -mt-4">
        {content}
      </p>
        <p className="font-bold text-text">{name}</p>
        <p className="mt-1 text-sm text-muted">{firm}</p>
      
    </article>
    )
}
export default DepoimentsCard
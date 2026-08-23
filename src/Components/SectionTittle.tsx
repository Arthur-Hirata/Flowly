interface SectionTittleProps{
    children: string;
}

function SectionTittle({children} : SectionTittleProps){
    return(
        <>
            <span className="text-center font-bold text-3xl">{children}</span>
        </>
    )
}
export default SectionTittle
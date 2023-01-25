export type HeadingProps = {
    heading: any
}

export const Heading = ({heading}: HeadingProps) => {
    return (
         <div
        className={`m-1 pl-${heading.depth} hover:brightness-150 `}
        onClick={(() => {
            const s = document.querySelector("#" + heading.slug)
            s.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        })}
    >
        {heading.text}
        </div>
    )
}
import { useEffect, useState, type JSX } from "react"

interface Props {
    image: string
    children: JSX.Element
}

export const ImageForms = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        setShow(true)
    })

    return (
        <div className="flex flex-wrap justify-center gap-20">
            <div className={`w-[200px] md:w-[300px] transition-all duration-1000 ${show ? 'translate-y-[-10%] opacity-[1]' : 'translate-y-[0%] opacity-[0]'}`}>
                <img className="" src={props.image} />
            </div>

            <form className={`w-[400px] md:w-[600px] shrink-1 flex flex-col justify-center transition-all duration-1000 ${show ? 'translate-y-[-10%] opacity-[1]' : 'translate-y-[0%] opacity-[0]'}`}>
                {props.children}
            </form>
        </div>
    )
}
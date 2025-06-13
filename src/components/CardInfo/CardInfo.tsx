
interface Props {
    nameOccurrence: string,
    namePerson: string,
    descricaoOccurrence: string,
    dateOccurrence: Date,
    localOccurrence: string
}

export const CardInfo = (props: Props) => {
    return (
        <div
            className="w-full border border-black/10 rounded-[5px] p-3 hover:bg-black/2 transition-all duration-300"
        >
            <div
                className="flex flex-col"
            >
                <div className="text-black flex gap-2">
                    <span
                        className="text-black font-bold"
                    >Nome Ocorrência:</span>
                    <span className="font-normal">{props.nameOccurrence}</span>
                </div>

                <div className="text-black flex gap-2">
                    <span
                        className="text-black font-semibold"
                    >Pessoa que reportou:</span>
                    <span>{props.namePerson}</span>
                </div>

                <div className="text-black flex gap-2">
                    <span
                        className="text-black font-semibold"
                    >Descrição:</span>
                    <span>{props.descricaoOccurrence}</span>
                </div>

                <div className="text-black flex gap-2">
                    <span
                        className="text-black font-semibold"
                    >Data:</span>
                    <span>{new Date(props.dateOccurrence).toISOString().split("T")[0]}</span>
                </div>

                <div className="text-black flex gap-2">
                    <span
                        className="text-black font-semibold"
                    >Local:</span>
                    <span>{props.localOccurrence}</span>
                </div>
            </div>
        </div>
    )
}
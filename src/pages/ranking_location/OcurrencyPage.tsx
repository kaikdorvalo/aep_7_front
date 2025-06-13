import { useEffect, useState } from "react"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { useApi } from "../../hooks/useApi";
import { CardInfo } from "../../components/CardInfo/CardInfo";

export const OcorrenciasPage = () => {

    const api = useApi()

    const [data, setData] = useState<any[] | null>(null);
    const [loaded, setLoaded] = useState(false)

    async function getOcurrences() {
        const result = await api.getOcurrences()
        // console.log(result.data)
        setData(result.data)
        setLoaded(true)
    }

    useEffect(() => {
        getOcurrences()
    }, [])

    return (
        <PageLayout
            title="Ocorrências registradas"
        >
            <div className={`w-full h-full flex flex-col gap-5 mb-20 transition-all duration-800 ${loaded ? 'opacity-[1]' : 'opacity-[0]'}`}>
                {
                    data?.map((el, index) => {
                        console.log(el)
                        return (
                            <CardInfo
                                dateOccurrence={el.dateOccurrence}
                                descricaoOccurrence={el.descricaoOccurrence}
                                localOccurrence={el.localOccurrence}
                                nameOccurrence={el.nameOccurrence}
                                namePerson={el.namePerson}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </PageLayout>
    )
}
import { useState, type ChangeEvent } from "react"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { SearchInput } from "../../components/TextInput/SearchInput"
import { ActionButton } from "../../components/ActionButton/ActionButton";
import AchieveIMG from "../../assets/images/achieve.png";
import { ImageForms } from "../../components/ImageForms/ImageForms";
import { useApi } from "../../hooks/useApi";
import { DateInput } from "../../components/DateInput/DateInput";

export const HomePage = () => {
    const [forms, setForms] = useState({
        nameOccurrence: "",
        namePerson: "",
        descricaoOccurrence: "",
        dateOccurrence: new Date().toISOString().split("T")[0],
        localOccurrence: ""
    })

    const [response, setResponse] = useState(false);

    const api = useApi();

    function handleForms(field: string, event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setForms((prev) => ({ ...prev, [field]: event.target.value }))
    }

    async function handleSubmit() {
        if (
            forms.nameOccurrence != "" &&
            forms.namePerson != "" &&
            forms.descricaoOccurrence != "" &&
            forms.dateOccurrence != "" &&
            forms.localOccurrence != ""
        ) {
            const result = await api.sendOccurence(forms)
            if (result.status === 201) {
                setResponse(true)
            }
        }
    }


    return (
        <PageLayout title="Registrar uma ocorrência">
            <div className="w-full h-full text-black pt-20">
                <div className="w-full h-full flex justify-center items-center">
                    {
                        response
                            ?
                            <div className="flex flex-col items-center gap-10">
                                <div className="text-xl">
                                    Ocorrência enviada!
                                </div>

                                <div className="h-10 w-64">
                                    <ActionButton
                                        action={() => setResponse(false)}
                                        text="Voltar"
                                        fill={true}
                                    />
                                </div>
                            </div>
                            :
                            <ImageForms image={AchieveIMG} >
                                <div className="w-full grid md:grid-cols-2 grid-cols-1 items-end gap-4">
                                    <div className="w-full">
                                        <SearchInput
                                            id="ocorrencia"
                                            label="Nome da ocorrência"
                                            placeHolder="Digite o nome"
                                            setValue={(e) => {
                                                handleForms('nameOccurrence', e)
                                            }}
                                            value={forms.nameOccurrence}
                                        ></SearchInput>
                                    </div>

                                    <div className="w-full">
                                        <SearchInput
                                            id="nome-pessoa"
                                            label="Seu nome"
                                            placeHolder="Digite o seu nome"
                                            setValue={(e) => {
                                                handleForms('namePerson', e)
                                            }}
                                            value={forms.namePerson}
                                        ></SearchInput>
                                    </div>

                                    <div className="w-full">
                                        <SearchInput
                                            id="descricao"
                                            label="Descreva o corrido"
                                            placeHolder="Digite aqui"
                                            setValue={(e) => {
                                                handleForms('descricaoOccurrence', e)
                                            }}
                                            value={forms.descricaoOccurrence}
                                        ></SearchInput>
                                    </div>

                                    <div>
                                        <DateInput
                                            id="data"
                                            label="Selecione da data"
                                            setValue={(e) => {
                                                handleForms('dateOccurrence', e)
                                            }}
                                            value={forms.dateOccurrence}
                                        ></DateInput>
                                    </div>

                                    <div className="w-full">
                                        <SearchInput
                                            id="local"
                                            label="Digite o endereço"
                                            placeHolder="Digite aqui"
                                            setValue={(e) => {
                                                handleForms('localOccurrence', e)
                                            }}
                                            value={forms.localOccurrence}
                                        ></SearchInput>
                                    </div>


                                    <div className="w-full h-10 mt-10 md:mt-0">
                                        <ActionButton
                                            action={handleSubmit}
                                            text="Enviar"
                                            fill={true}
                                        />
                                    </div>
                                </div>
                            </ImageForms>
                    }
                </div>
            </div>
        </PageLayout>
    )
}
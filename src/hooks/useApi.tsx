import axios from 'axios'

const baseApi = "http://localhost:8080/"

const api = axios.create({
    baseURL: baseApi,
    timeout: 100000,
})

export const useApi = () => ({
    getNameRnaking: async (name: string) => {
        const ranking = await api.get(`/${name}`);
        return ranking;
    },

    sendOccurence: async (data: any) => {
        const result = await api.post(`/ocorrencia`, data)
        return result;
    },

    getOcurrences: async () => {
        const result = await api.get("/ocorrencia")
        return result
    }
})
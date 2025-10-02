import { AxiosInstance } from "@/utils/axiosInstance"

export const getAffiliates = () => {
    return AxiosInstance.get('/affiliates')
}

export const addAffiliate = (data: any) => {
    return AxiosInstance.post('/affiliates', data)
}

export const showAffiliate = (uuid: string) => {
    return AxiosInstance.get('/affiliates/' + uuid)
}

export const getNutritionGraphByAffiliateUuid = (uuid: string) => {
    return AxiosInstance.get('/affiliates/graph/' + uuid)
}

export const getNutritionDetailGraphByAffiliateUuid = (uuid: string, date: string) => {
    return AxiosInstance.get('affiliates/detail/graph/' + uuid + '/' + date)

}
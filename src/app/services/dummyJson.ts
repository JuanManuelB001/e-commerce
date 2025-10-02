import { AxiosInstance } from "@/lib/axiosInstance"

export const getProducts = () => {
    return AxiosInstance.get('products')
}

export const getProduct = (id: string) =>{
    return AxiosInstance.get(`products/${id}`);
}


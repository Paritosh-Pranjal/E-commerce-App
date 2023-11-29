import api from "../api";

export const getItems = async () => {
    return await api.get(`/items`);
}

export const getItemsById = async (id: number) => {
    return await api.get(`/items/${id}`);
}
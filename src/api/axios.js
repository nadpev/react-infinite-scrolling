import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://rickandmortyapi.com'
})

export const getPostsPage = async (pageParam = 1, options = {}) => {
    const response = await api.get(`api/character?_page=${pageParam}`, options)
    console.log(response.data["results"])
    return response.data["results"]
}
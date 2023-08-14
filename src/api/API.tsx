import axios from "axios"

const URL: string = "https://jsonplaceholder.typicode.com/photos"

// const URL: string = "https://jsonplaceholder.typicode.com/comments"

export const getData = async () => {
    try {
        return await axios.get(URL).then((res) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}
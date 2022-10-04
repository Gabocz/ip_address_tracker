import axios from 'axios'
const API_KEY = 'at_Rw1AOZ2vdFxKba4wYyoPO1nIG9zRe';



export const getData = async (searchTerm) => {
    try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${searchTerm}`)
        const data = response.data 
        return data    
    } catch (error) {
        console.log(error)
    }
    
}




export const trimSearchTerm = (searchTerm) => {
    return searchTerm.trim()
}






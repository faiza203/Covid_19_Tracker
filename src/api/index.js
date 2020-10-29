import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const fetchData = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return (modifiedData);
    } catch (err) {
        console.log(err);
    }
}
export const fetchDailyData = async () => {
    try {
        const data = await axios.get(`${url}/daily`);
        return (data);
    } catch (err) {
        console.log(err);
    }
}
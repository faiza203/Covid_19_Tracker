import React , {useState , useEffect}from "react";
import {Line , Bar} from "react-chartjs-2";
import {fetchDailyData} from "./../../api";
import style from "./Charts.module.css";
const Charts = () => {
    const [dailyData , setDailyData] = useState({});
    useEffect(async()=>{
    setDailyData(await fetchDailyData()) 
    })
    return <h1>Charts</h1>
};

export default Charts;
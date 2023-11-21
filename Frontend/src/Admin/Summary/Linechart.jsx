import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from "axios"
import { setheader } from '../../../Features/api';
const Linechart = () => {
const [weeksales,setWeeksales]=useState([])
useEffect(()=>{
   async function fetchdata(){
    const res=await axios.get('http://localhost:5000/api/stats/week-sales',setheader());

    res.data.sort((a,b)=>b.total-a.total);

    const newData=res.data.map((item)=>{
        const Days=[
            "Sun",
            "Mon",
            "Tue",
            "wed",
            "Thu",
            "Fri",
        "sat",
        ]
        return {
            day:Days[item._id-1],
            amount:item.total/100,
        }
    })
    setWeeksales(newData);

   }
   fetchdata()
},[])

    const data = weeksales;
  return (
    <>
     <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="day" />
    <YAxis />
    <Tooltip />
  </LineChart>
    </>
  )
}

export default Linechart

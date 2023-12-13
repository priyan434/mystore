import React, { useEffect, useState } from 'react'
import axios from "axios"
import { setheader } from '../../../Features/api'

const Users = () => {
    const [userStats,setUserstats]=useState([]);
    const[userPercentage,setUserPercentage]=useState(0);
    const [orderStats,setOrderstats]=useState([]);
    const[orderPercentage,setOrderPercentage]=useState(0);
    const [EarningStats,setEarningstats]=useState([]);
    const[earningPercentage,setEarningPercentage]=useState(0);
 
    let TotalUsers=userStats.reduce((acc, curr) => acc + curr.total, 0);
    let TotalOrders=orderStats.reduce((acc, curr) => acc + curr.total, 0);
    let TotalEarnings=EarningStats.reduce((acc, curr) => acc + curr.total, 0);
    useEffect(()=>{
        async function fetchdata(){
            try{
              
                const res=await axios.get('http://localhost:5000/api/stats/userstats',setheader())
                    res.data.sort((a,b)=>b.total-a.total);
                setUserstats(res.data);
                setUserPercentage(((res.data[0].total-res.data[1].total)/res.data[1].total)*100)
         
            }
            catch(err){
                console.log(err);
            }
           

        }
        fetchdata()
    },[])
    useEffect(()=>{
        async function fetchOrderdata(){
            try{
                
                const res=await axios.get('http://localhost:5000/api/stats/orderstats',setheader())
                console.log("users",res.data);
               res.data.sort((a,b)=>b.total-a.total);
                setOrderstats(res.data);
                setOrderPercentage(((res.data[0].total-res.data[1].total)/res.data[1].total)*100)
         
            }
            catch(err){
                console.log(err);
            }
           

        }
        fetchOrderdata()
    },[])
    useEffect(()=>{
        async function fetchEarningsdata(){
            try{
                
                const res=await axios.get('http://localhost:5000/api/stats/earningstats',setheader())
               res.data.sort((a,b)=>b.total-a.total);
                setEarningstats(res.data);
                setEarningPercentage(((res.data[0].total-res.data[1].total)/res.data[1].total)*100)
         
            }
            catch(err){
                console.log(err);
            }
           

        }
        fetchEarningsdata()
    },[])
  return (
    <div>
      <div className="stats shadow w-full">
      <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">{TotalUsers?TotalUsers:<>loading....</> }</div>
    <div className="stat-desc text-secondary">{userPercentage>0? <>↗︎ {userPercentage}%</>:<>↘︎ {userPercentage}%   </>}</div>
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Orders</div>
    <div className="stat-value">{TotalOrders?TotalOrders:<>loading...</>}</div>
    <div className="stat-desc">{orderPercentage>=0? <>↗︎ {orderPercentage}%</>:<>↘︎ {orderPercentage}%   </>}</div>
  </div>
  
 
  
  <div className="stat place-items-center">
    <div className="stat-title">Earnings</div>
    <div className="stat-value">{TotalEarnings?TotalEarnings/100:<>loading...</>}</div>
    <div className="stat-desc">{earningPercentage>=0? <>↗︎ {earningPercentage}%</>:<>↘︎ {earningPercentage}%   </>}</div>
  </div>
  
</div>
    </div>
  )
}

export default Users

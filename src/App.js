import React from "react";
import Typography from "@material-ui/core/Typography";
import {useEffect,useState} from "react";
import CovidData from "./CovidData";
import axios from "axios";
function App() {
  const url="https://api.covidtracking.com/v1/states/current.json";
  const [stateData,setStateData]= useState([]);
  useEffect(()=>{
    axios.get(url)
      .then(res=>{
       console.log(res.data);
       const temp=res.data;
       const temp1=temp.map((t)=>{
         return {
           "stateName":t.state,
           "hospitalizedCurrently":t.hospitalizedCurrently,
           "total":t.total,
           "death":t.death,
           "onVentilatorCurrently":t.onVentilatorCurrently,
           "totalTestResults":t.totalTestResults,
           "positive":t.positive,
           "dateModified": new Date(t.dateModified).getDate()+"/"+new Date(t.dateModified).getMonth()+"/"+new Date(t.dateModified).getFullYear()
         }

       })
       setStateData(temp1);
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className="App">
        <CovidData data={stateData} />
    </div>
  );
}

export default App;

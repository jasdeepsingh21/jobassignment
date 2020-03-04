import React,{ useState } from "react";
import Grid from "@material-ui/core/Grid";

const moment = require('moment');

function Timeline(props) {
  const TimeLine = index => {
    const barrArr = [];
    for (let i = 0; i < 24; i++) {
      barrArr.push(
        <Grid item md keys={i} style={{ background: " gainsboro" }}>
          <div>{i}</div>
        </Grid>
      );
    }
    return barrArr;
  };
  
  const [time,setTime] = useState(moment(new Date()).format('LT'))
  const handleClick = () => {
    // #2471A3
    const newTime=document.getElementById('timeSlot').value;
    setTime(moment(newTime).format('LT'));
  }
    console.log('onload time is :',time);
  return (
    <div>
      <Grid container className='container'>
        <Grid md={3} conatiner>
          <input type="time" value={time} id="timeSlot"/>
          <button onClick={handleClick}>Save</button>
        </Grid>
        <Grid spacing={3} md={9} container className="job-box"></Grid>
      </Grid>
      <Grid container>
        <Grid md={3} conatiner id="timeBar"></Grid>
        <Grid spacing={3} md={9} container>
          {TimeLine()}
        </Grid>
      </Grid>
    </div>
  );
}

export default Timeline;

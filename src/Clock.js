import React from 'react';

import App from './App';


class Clock extends React.Component{


constructor(props) {
super(props);
this.state = this.getTime();
}

componentDidMount(){
this.setTimer();
}

setTimer()
{
clearTimeout(this.timeout);
this.timeout = setTimeout(this.updateClock.bind(this), 1000);
}

updateClock(){
this.setState(this.getTime,this.setTimer);
}

getTime(){
const currentTime=new Date();

return{
hours:currentTime.getHours(),
minutes:currentTime.getMinutes(),
seconds:currentTime.getSeconds()

}

}

render(){
const {hours,minutes,seconds}=this.state;

return(


<div className="clock">
<h1>My Simple Clock using react State</h1>
<p>

{hours}:{minutes}:{seconds}


</p>

</div>


);



}



}

export default Clock;

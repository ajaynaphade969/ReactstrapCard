import React, { Component ,useState } from 'react';
import DatePicker from 'react-date-picker';

//addition of days to the date selected
function addDate(date,days){
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
}

function MyDate_1(props) {
  const [value, onChange] = useState(new Date());
    const newDate = addDate(value,props.noOfAllowedDays);
    console.log(value);
  return (
    <div>
      <DatePicker
      disabledDays={[new Date(2020, 11, 10),{daysOfWeek: [0, 6]}]}
        onChange={value=> onChange(value)}
        value={value}
        minDate={value}
        maxDate={newDate}
        initialMonth={value}
        
      />
    </div>
  );
}
class MyDate extends Component{
    render(){
        return(<div>
            <MyDate_1 noOfAllowedDays={30} />
        </div>);
    }
}




{/*

Call

<MyNewDate noOfAllowedDays={45} bankHolidayDates={bankHolidayDates}/> 

const bankHolidayDates = [
    new Date(2021,0,15),new Date(2021,0,5),
    new Date(2021,0,25),new Date(2021,0,20)] 
 


*/}

export default MyDate; 
 
[‎02-‎12-‎2020 14:37]  Deshmukh, Manish:  
disabled weekend and specific days are not working 
but i did implementation
 
[‎02-‎12-‎2020 15:08]  
ok
 
[‎02-‎12-‎2020 15:08]  
just disable weekend first
 
[‎02-‎12-‎2020 15:08]  Deshmukh, Manish:  
yes i am trying using jquery
 
[‎02-‎12-‎2020 15:11]  
oh ok
 
[‎02-‎12-‎2020 15:12]  
there is one lib  moment.js
 
[‎02-‎12-‎2020 15:12]  Deshmukh, Manish:  
in node modules?
 
[‎02-‎12-‎2020 17:59]  
npm i moment karun paha
 
[‎02-‎12-‎2020 18:00]  Deshmukh, Manish:  
Haa kela but error yet ahe 
Ek date-fns module ahe tyanni baghat ahe karun
 
[‎02-‎12-‎2020 18:01]  
ok
 
[‎02-‎12-‎2020 18:01]  
react che date picker use kartat internally
 
[‎02-‎12-‎2020 18:01]  Deshmukh, Manish:  
Tyani hoil i think
Ok
 
[‎02-‎12-‎2020 18:01]  
moment bagh
 
[‎02-‎12-‎2020 18:02]  Deshmukh, Manish:  
Ho 
 
[‎02-‎12-‎2020 18:02]  
https://www.npmjs.com/package/moment 
 
[‎02-‎12-‎2020 18:02]  
A JavaScript date library for parsing, validating, manipulating, and formatting dates. 
The action couldn’t be completed. Please try again later. 
[‎02-‎12-‎2020 18:03]  Deshmukh, Manish:  
Got it
 
[‎02-‎12-‎2020 18:03]  
luxon 
date-fns 
day.js 
 
[‎02-‎12-‎2020 18:03]  
alternatives
 
[‎02-‎12-‎2020 18:03]  
moment juni ahe
 
[‎02-‎12-‎2020 18:04]  
date-fns navin ahe
 
[‎02-‎12-‎2020 18:04]  Deshmukh, Manish:  
Haa te easily hoil date-fns madhe
moment madhe aplyala weekend che date calculate karun send karave lagtiel
 
[‎02-‎12-‎2020 18:05]  
ok good
 
[‎02-‎12-‎2020 18:05]  
navin lib bagh mag
 
[‎02-‎12-‎2020 18:05]  Deshmukh, Manish:  
Ho 
 
[‎04-‎12-‎2020 11:09]  Deshmukh, Manish:  
hii
 
[‎04-‎12-‎2020 11:09]  
Hi Manish
 
[‎04-‎12-‎2020 11:10]  Deshmukh, Manish:  
Sir te datepicker banavla me 
EK vel screen share karu ka?
 
[‎04-‎12-‎2020 11:10]  
eka call madhe ahe
This message wasn't sent to Deshmukh, Manish. 
[‎04-‎12-‎2020 11:11]  
thodya velani tula ping karto
This message wasn't sent to Deshmukh, Manish. 
[‎04-‎12-‎2020 11:17]  
eka call suru ahe
 
[‎04-‎12-‎2020 11:17]  Deshmukh, Manish:  
Ok Sir
 
[‎04-‎12-‎2020 11:33]  
Hi
 
[‎04-‎12-‎2020 11:33]  
share kar
 
[‎04-‎12-‎2020 11:35]  Deshmukh, Manish:  
Ho 
 
[‎04-‎12-‎2020 11:35]  
ok
 
Connected to Deshmukh, Manish (manish.deshmukh@capgemini.com).  
Call with Deshmukh, Manish (manish.deshmukh@capgemini.com) has ended. 12 minutes  
Connected to Deshmukh, Manish (manish.deshmukh@capgemini.com).  
Call with Deshmukh, Manish (manish.deshmukh@capgemini.com) has ended. 2 minutes  
[‎04-‎12-‎2020 12:32]  Deshmukh, Manish:  
Zale sir te Banking holidays ch
 
[‎04-‎12-‎2020 12:33]  
ok gr8
 
[‎04-‎12-‎2020 12:33]  
5 min
 
[‎04-‎12-‎2020 12:33]  Deshmukh, Manish:  
yes
 
[‎04-‎12-‎2020 12:59]  
call karu
 
Connected to Deshmukh, Manish (manish.deshmukh@capgemini.com).  
[‎04-‎12-‎2020 13:11]  
Country Drop Down 
 
[‎04-‎12-‎2020 13:12]  
Country code selector with Flag
 
[‎04-‎12-‎2020 13:12]  
Rs 10
 
[‎04-‎12-‎2020 13:13]  
Tool Tip
 
[‎04-‎12-‎2020 13:16]  
https://www.npmjs.com/package/react-datepicker 
 
Call with Deshmukh, Manish (manish.deshmukh@capgemini.com) has ended. 17 minutes  
[‎04-‎12-‎2020 14:46]  
https://ant.design/ 
This message wasn't sent to Deshmukh, Manish. 
[‎04-‎12-‎2020 14:46]  
he bagh
This message wasn't sent to Deshmukh, Manish. 
[‎04-‎12-‎2020 15:01]  
https://ant.design/ 
This message wasn't sent to Deshmukh, Manish. 
[‎04-‎12-‎2020 15:03]  
hi
 
[‎04-‎12-‎2020 15:05]  
https://ant.design/ 
 
[‎04-‎12-‎2020 15:05]  
https://ant.design/ 
 
[‎04-‎12-‎2020 15:05]  
https://ant.design/ 
 
[‎04-‎12-‎2020 15:05]  
msg fail hot ahe
 
[‎04-‎12-‎2020 15:07]  Deshmukh, Manish:  
Hi sir  
 
[‎04-‎12-‎2020 15:07]  Deshmukh, Manish:  
Actually ith light geli ahe  
 
[‎04-‎12-‎2020 15:07]  Deshmukh, Manish:  
Tr laptop off zalay 
 
[‎04-‎12-‎2020 15:08]  
ok
 
[‎04-‎12-‎2020 15:08]  Deshmukh, Manish:  
Haa karto ping thodya velat 
 
[‎04-‎12-‎2020 16:40]  
ok
 
[‎04-‎12-‎2020 16:40]  
props che format pathav
 
[‎04-‎12-‎2020 16:41]  Deshmukh, Manish:  
Hi Sir
 
[‎04-‎12-‎2020 16:41]  
ti ek file My New Date 
 
[‎04-‎12-‎2020 16:41]  Deshmukh, Manish:  
Ho
 
[‎04-‎12-‎2020 16:42]  Deshmukh, Manish:  
No Title 
import React , {Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class MyNewDate extends Component{
    constructor(props){
        super(props);
        this.state= {
            selectedDate :  undefined, //handles selected date
            maximumDate : undefined, //handles maximum range date
        }
        this.handleDayClick = this.handleDayClick.bind(this); //Binding the click event to select the specific date
    }
    //Adding the number of days to today's date (disable if the date is beyond range)
    addDate(date,days){
        const copy = new Date(Number(date));
        copy.setDate(date.getDate() + days);
        return copy;
    } 
    //implementation of handle click event 
    handleDayClick(day){
        this.setState({maximumDate : this.addDate(day,this.props.noOfAllowedDays)})
        this.setState({selectedDate : day});
    }
    render(){
        var disableDay=[]; //initializing the empty array to store the dates which are going to be disable
        this.props.bankHolidayDates.map((bankingHolidayDate)=>{
             disableDay.push(bankingHolidayDate); //adding the dates to the array
            });
          disableDay.push({ daysOfWeek : [0, 6]}, //weekend disable 
                         {after: this.state.maximumDate, //out of range dates are disable here
                         before: new Date()}
                         );
        return(
            <div>
                <DayPicker onDayClick={this.handleDayClick} disabledDays={disableDay}/>
            </div>
        )
    }
}
export default MyNewDate; 
 

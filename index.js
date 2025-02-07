/* Your Code Here */
function createEmployeeRecord(firstName,familyName,title,payPerHour){
    return {
        firstName:firstName,
        familyName:familyName,
        title:title,
        payPerHour:payPerHour,
        timeInEvents:[],
        timeOutEvents:[]
    }
}


function createEmployeeRecords(arrayOfRecords){
    return arrayOfRecords.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    const [date,hour] = dateStamp.split(" ")

    this.timeInEvents.push({
        type:"Timein",
        hour:parseInt(hour,10),
        date:date
    })
    return this; 
}

function createTimeOutEvent(dateStamp){
    const [day,hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
        type:"Timeout",
        hour:parseInt(hour,10),
        date:date
    })

    return this;
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)

    if (timeOut && timeIn){
        return (timeOut.hour - timeIn.hour) / 100;
    }
    else{
        return 0
    }
}

function wagesEarnedOnDate(date){
    const workingHours = hoursWorkedOnDate.call(this,date)
    return workingHours * this.payPerHour;

}

function findEmployeeByFirstName(firstLetter){
    const findName = this.firstName.find(event => event === firstLetter)

    if(findName.length >1){
        return `There are ${findName.length} people in the company with the same starting letter`
    }
    else if(findName.length == 1){
        return `There is only one name with the given starting letter ${findName}`
    }
    else {
        return undefined
    }
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


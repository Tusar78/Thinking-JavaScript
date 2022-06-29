const isMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!isMeeting) {
    meetingDetails = {
      name: "Technical-meeting!",
      tools: "Google meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});

const addToCalender = meetingDetails => {
  const calender = `${meetingDetails.name} has been schedule on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
} 

meeting
  .then(addToCalender)
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });

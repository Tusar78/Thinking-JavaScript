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

meeting
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

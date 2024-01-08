export const MeetCreate = async ({
  _token,
  _meetingName,
  _hours,
  _minutes,
  _meetingDetailDtos,
  _invitedPeople,
}) => {
  try {
    let _emails = _invitedPeople.map((person) => person.email);
    const response = await fetch(
      `http://localhost:5206/api/Meeting/Create-Meeting`,
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MeetingName: _meetingName,
          Hours: _hours,
          Minute: _minutes,
          MeetingDetailDtos: _meetingDetailDtos,
          Emails: _emails,
        }),
      }
    );

    const value = await response.json();
    return value;
  } catch (error) {
    console.error(error);
  }
};

export const GetSelectedMeeting = async ({ _token, _meetingId }) => {
  try {
    const response = await fetch(
      //URL
      `http://localhost:5206/api/Meeting/Get-Single-Meeting-For-User?meetingId=${_meetingId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${_token}`,
          "Content-Type": "application/json",
          meetingId: _meetingId,
        },
      }
    );

    const allJsonCommand = await response.json();
   
    return allJsonCommand;
  } catch (error) {
    console.log(error);
  }
};

export const GetActiveMeetings = async (_token) => {
  try {
    const response = await fetch(
      "http://localhost:5206/api/Meeting/Get-Active-Meeting",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const allJsonCommand = await response.json();
    const value = allJsonCommand.$values;
    return value;
  } catch (error) {
    console.log(error);
  }
};

export const SendVote = async ({
  _token,
  _email,
  _meetingId,
  _selectedDaysId,
}) => {
  try {
    console.log(_email, _meetingId, _selectedDaysId, "bbbbbbbbbbbb");
    const response = await fetch(
      "http://localhost:5206/api/Meeting/Add-Vote-For-Meeting",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${_token}`,
          meetingId: _meetingId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: _email,
          MeetingId: _meetingId,
          MeetingDetailIds: _selectedDaysId,
        }),
      }
    );

    console.log(response, "responseee");
    return response
  } catch (error) {
    console.error(error);
  }
};

export const DeleteMeeting = async (_token, _meetingId) => {
  try {
    const response = await fetch(
      "http://localhost:5206/api/Meeting/Disactive-Meeting-Update",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${_token}`,
          meetingId: _meetingId,
          "Content-Type": "application/json",
        },
      }
    );

    const value = await response.json();
    return value;
  } catch (error) {
    console.log(error);
  }
};

//fetch yerine axios ile backend
// import axios from 'axios';

// export const MeetCreate = async ({
//   _token,
//   _meetingName,
//   _hours,
//   _minutes,
//   _meetingDetailDtos,
//   _invitedPeople,
// }) => {
//   try {
//     let _emails = _invitedPeople.map((person) => person.email);

//     const response = await axios.post(
//       `http://localhost:5206/api/Meeting/Create-Meeting`,
//       {
//         MeetingName: _meetingName,
//         Hours: _hours,
//         Minute: _minutes,
//         MeetingDetailDtos: _meetingDetailDtos,
//         Emails: _emails,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${_token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const GetActiveMeetings = async (_token) => {
//   try {
//     const response = await axios.get(
//       "http://localhost:5206/api/Meeting/Get-Active-Meeting",
//       {
//         headers: {
//           Authorization: `Bearer ${_token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data.$values;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const DeleteMeeting = async (_token, _meetingId) => {
//   try {
//     const response = await axios.put(
//       "http://localhost:5206/api/Meeting/Disactive-Meeting-Update",
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${_token}`,
//           meetingId: _meetingId,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

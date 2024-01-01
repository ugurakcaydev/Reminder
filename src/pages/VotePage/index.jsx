// VotePage component
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sendDataToApi } from '../../api/BookingVoteData';

export default function VotePage() {
    const location = useLocation();
    const meeting = location.state?.meetingKey;

    console.log("TOPLANTI DETAYLARI", meeting);

    const [selectedDays, setSelectedDays] = useState([]);

    const handleCheckboxChange = (day) => {
        setSelectedDays(prevDays => {
            if (prevDays.includes(day)) {
                return prevDays.filter(d => d !== day);
            } else {
                return [...prevDays, day];
            }
        });
    };

    const handleVote = async () => {
        const meetingData = {
            ...meeting,
            selectedDays

        };
        const response = await sendDataToApi(meetingData);
        console.log(response);
        console.log("SEÇİLEN GÜNLER: ", selectedDays);
    };

    return (
        <div className='w-full h-[100vh] flex items-center justify-center  p-2 text-[#fff]'>
            {meeting && (
                <>
                    <div className='w-[500px] h-[600px] flex flex-col justify-between  p-5 border rounded-2xl border-[#ffffff78] shadow-xl shadow-[rgba(0,0,0,0.3)] '>
                        <div className='flex flex-col gap-y-7'>
                            <section className='flex justify-between '>
                                <div className='flex flex-col'>
                                    <span className='text-lg'>Toplantı Adı: {meeting.MeetingName}</span>
                                    <span className='text-sm'>Topantı Süresi: {meeting.Hours} saat {meeting.Minute} dakika</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-base'>Toplantı Sahibi: {meeting.UserName}</span>
                                    <span className='text-sm'>E-mail: {meeting.Email}</span>
                                </div>
                            </section>
                            <span className='text-base'>Toplantı Katılımcıları</span>
                            <section className='max-h-[100px] overflow-x-hidden flex flex-col  '>
                                {meeting.GetAllMeetingItemDto?.$values.map((person) => (
                                    <li key={person.Id} className='list-decimal'>
                                        {person.Email}
                                    </li>
                                ))}
                            </section>
                            <section className='flex flex-col gap-y-2 '>
                                {meeting.GetAllMeetingDetailDtos?.$values.map((days) => (
                                    <div key={days.$id} className='w-full flex items-center justify-start gap-x-2'>
                                        <input
                                            className='w-4 h-4'
                                            type="checkbox"
                                            onChange={() => handleCheckboxChange(days)}
                                        />
                                        {days.MeetingsDay} | {days.MeetingStart} : {days.MeetingFinish}
                                    </div>
                                ))}
                            </section>
                        </div>
                        <div className='flex justify-center '>
                            <button onClick={handleVote} className='w-[80%] bg-[#3daf26aa] py-3 text-base rounded-xl hover:bg-[#3daf26]'>OYLA</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

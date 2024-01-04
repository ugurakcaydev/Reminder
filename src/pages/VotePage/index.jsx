// VotePage component
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

//Vote Results Send 
import { sendDataToApi } from '../../api/BookingVoteData';


export default function VotePage() {
    const location = useLocation();
    const meeting = location.state?.meetingKey;

    console.log("TOPLANTI DETAYLARI", meeting);

    const [votingClosed, setVotingClosed] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);

    const handleCheckboxChange = (day) => {
        if (!votingClosed) {
            setSelectedDays((prevDays) => {
                if (prevDays.includes(day)) {
                    return prevDays.filter((d) => d !== day);
                } else {
                    return [...prevDays, day];
                }
            });
        }
    };

    const handleVote = async () => {
        if (votingClosed) {
            console.log("Ankete zaten oy verildi!");
            return;
        }

        const meetingData = {
            ...meeting,
            selectedDays,
        };
        const response = await sendDataToApi(meetingData);
        console.log("Anket Sonuçları: ", response);
        setVotingClosed(true);

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
                                {meeting.GetAllMeetingDetailDtos?.$values.map((days) => {
                                    let saat = parseInt(days.MeetingStart.split(':')[0]) + meeting.Hours;
                                    let dakika = parseInt(days.MeetingStart.split(':')[1]) + meeting.Minute;

                                    if (dakika >= 60) {
                                        saat += 1;
                                        dakika %= 60;
                                    }

                                    return (
                                        <div key={days.$id} className='w-full flex items-center justify-start gap-x-2'>
                                            <input
                                                className='w-4 h-4'
                                                type="checkbox"
                                                onChange={() => handleCheckboxChange(days)}
                                                disabled={votingClosed}
                                            />
                                            {`${days.MeetingsDay} | ${days.MeetingStart} : ${saat < 10 ? '0' + saat : saat}:${dakika < 10 ? '0' + dakika : dakika}`}
                                            {/** Oyla butonuna tıkladıktan sonra her seçeneğin yanına yüzdelik değer gelecek */}
                                        </div>
                                    );
                                })}
                            </section>

                        </div>
                        <div className='flex justify-center '>
                            <div className='w-full text-center'>
                                <button
                                    onClick={votingClosed ? undefined : handleVote}
                                    className={classNames('w-[80%] py-3 text-base rounded-xl', {
                                        'bg-[#777777] cursor-not-allowed': votingClosed,
                                        'bg-[#3daf26aa] hover:bg-[#3daf26]': !votingClosed,
                                    })}
                                >
                                    {votingClosed ? 'OY VERİLDİ' : 'OYLA'}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

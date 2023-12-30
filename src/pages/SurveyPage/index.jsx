// SurveyPage component
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SurveyPage() {
    const location = useLocation();
    const meeting = location.state?.meetingKey;

    console.log(meeting, "afsadfs<fsdf<sdf4651");

    return (
        <div className=' mt-10 bg-red-500 p-2'>
            {meeting && (
                <>
                    <div>Meeting ID: {meeting.Id}</div>
                </>
            )}
        </div>
    );
}

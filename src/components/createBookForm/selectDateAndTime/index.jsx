import React, { useState } from 'react';
import ComboBox from "../comboBox";

const ReservationSystem = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedStartTimes, setSelectedStartTimes] = useState({});
    const [selectedEndTimes, setSelectedEndTimes] = useState({});
    const [isEditable, setIsEditable] = useState(true);

    const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const today = new Date().getDay();
    const days = [...daysOfWeek.slice(today), ...daysOfWeek.slice(0, today)];
    const morningTimes = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30'];
    const afternoonTimes = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];

    const handleDayChange = (day, isChecked) => {
        if (isChecked) {
            setSelectedDays([...selectedDays, day]);
            setSelectedStartTimes({ ...selectedStartTimes, [day]: '8:00' });
            setSelectedEndTimes({ ...selectedEndTimes, [day]: '12:00' });
        } else {
            setSelectedDays(selectedDays.filter(d => d !== day));
            const { [day]: removedStartTime, ...restStartTimes } = selectedStartTimes;
            setSelectedStartTimes(restStartTimes);
            const { [day]: removedEndTime, ...restEndTimes } = selectedEndTimes;
            setSelectedEndTimes(restEndTimes);
        }
    };

    const handleEdit = () => {
        setIsEditable(!isEditable);
    };

    const groupedDays = selectedDays.reduce((groups, day) => {
        const key = `${selectedStartTimes[day]} ÖÖ - ${selectedEndTimes[day]} ÖS`;
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(day);
        return groups;
    }, {});

    return (
        <>
            {isEditable ? (
                <div className='w-full'>
                    {days.map((day, index) => (
                        <div key={index} className=' w-full h-12 grid grid-cols-5 gap-y-2 items-center' style={{ gridTemplateColumns: '0.5fr 1.5fr 1fr  0.1fr  1fr' }}>
                            <input
                                className='accent-tgold w-4 h-4 cursor-pointer'
                                type="checkbox"
                                id={`day${index}`}
                                name="day"
                                value={day}
                                onChange={(e) => handleDayChange(day, e.target.checked)}
                                disabled={!isEditable} />
                            <label
                                htmlFor={`day${index}`}>{day}
                            </label>
                            <select
                                className='p-1 bg-transparent border rounded-md outline-none cursor-pointer'

                                onChange={(e) => setSelectedStartTimes({ ...selectedStartTimes, [day]: e.target.value })} disabled={!isEditable}>
                                {morningTimes.map((time, index) => (
                                    <option
                                        className='text-center bg-[#32414a]'
                                        key={index}
                                        value={time}>{time} ÖÖ</option>
                                ))}
                            </select>
                            <span className='p-1'>—</span>
                            <select
                                className='p-1 bg-transparent border rounded-md outline-none cursor-pointer'
                                onChange={(e) => setSelectedEndTimes({ ...selectedEndTimes, [day]: e.target.value })} disabled={!isEditable}>
                                {afternoonTimes.map((time, index) => (
                                    <option
                                        className='text-center bg-[#32414a]'
                                        key={index}
                                        value={time}>{time} ÖS</option>
                                ))}
                            </select>

                        </div>

                    ))}
                    <button type="button" onClick={handleEdit}>{isEditable ? 'Onayla' : 'Düzenle'}</button>
                </div>
            ) : (
                <div>
                    {Object.entries(groupedDays).map(([time, days], index) => (
                        <p key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{time}</span>
                            <span>{[...new Set(days)].join(', ')}</span>
                        </p>
                    ))}
                    <button type="button" onClick={handleEdit}>Düzenle</button>
                </div>
            )}
        </>
    );
};

export default ReservationSystem;

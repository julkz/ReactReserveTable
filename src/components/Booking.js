import { useState } from 'react';

export default function Booking(props) {
      // Define state variables for each field in the form
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00'); // Default value
  const [guests, setGuests] = useState(1); // Default value
  const [occasion, setOccasion] = useState('Birthday'); // Default value
    // contains the data of the user from the reservation page which will be submitted via server to the database
    const [reservation, setReservation] = useState({guests: guests, date: '', time: '', ocassion: occasion});

    const handleDateChange = (event) => {
       // updateTimes(event.target.value);
        setDate(event.target.value);
      };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { date, time, guests, occasion });
        props.submitReservation(reservation);
      };

      const handleTime = (e) => {
        setTime(e);
        setReservation({...reservation, time: time});
      };
      const handleGuests = (e) => {
        setGuests(e);
        setReservation({...reservation, guests: guests});
      };
      const handleOcasion = (e) => {
        setOccasion(e);
        setReservation({...reservation, ocassion: occasion});
      };

      return (
        <section className="booking-wrapper">
          <form style={{ display: 'grid', maxWidth: '250px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
              {props.availableTimes.map((availableTime, index) => (
                <option key={index}>{availableTime}</option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
        </section>
      );
  };
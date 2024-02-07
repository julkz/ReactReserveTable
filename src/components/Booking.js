import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export default function Booking(props) {
  const [reservation, setReservation] = useState({
    guests: 1,
    date: '',
    time: '17:00',
    occasion: 'Birthday'
  });
  const [formErrors, setFormErrors] = useState({}); // State for form validation errors

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setReservation({ ...reservation, date: selectedDate });
  };

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    if (!reservation.date || reservation.date === "2000-01-01") {
      setFormErrors({ ...formErrors, date: 'Date is required' });
      return;
    }
    props.submitReservation(values);
  };

  return (
    <section className="booking-wrapper">
      <Formik
        initialValues={reservation}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.date) {
            errors.date = 'Date is required';
          }
          if (!values.time) {
            errors.time = 'Time is required';
          }
          if (!values.guests || values.guests < 1) {
            errors.guests = 'Number of guests must be at least 1';
          }
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'grid', maxWidth: '250px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date" aria-label="On Click">Choose date</label>
            <Field type="date" id="res-date" name="date" onChange={handleDateChange} value={reservation.date} required />
            {formErrors.date && <span style={{ color: 'red' }}>{formErrors.date}</span>} {/* Display validation error */}

            <label htmlFor="res-time" aria-label="On Click">Choose time</label>
            <Field as="select" id="res-time" name="time" required>
              <option value="">Select time</option>
              {props.availableTimes.map((availableTime, index) => (
                <option key={index}>{availableTime}</option>
              ))}
            </Field>

            <label htmlFor="guests" aria-label="On Click">Number of guests</label>
            <Field type="number" id="guests" name="guests" min="1" max="10" required />

            <label htmlFor="occasion">Occasion</label>
            <Field as="select" id="occasion" name="occasion">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>

            <button type="submit" aria-label="On Click">Make Your reservation</button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

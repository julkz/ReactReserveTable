import Booking from "./Booking";
import { useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../utilities/API";
import { useNavigate, redirect } from "react-router-dom";


const updateTimeSlots = (availableTimeSlots, date) => {
  const response = fetchAPI(new Date(date));
  console.log(response);
  return response.morning.length !== 0 ? response : availableTimeSlots;
};

const initializeTimes = (initAvaliableTimeSlots) => {
  let response = [...initAvaliableTimeSlots, ...fetchAPI(new Date())];

  // Sort dates each string to Date object
  response
    .map((hour) => new Date(`2000-01-01T${hour}`))
    .sort((a, b) => a - b)
    .map((date) =>
      date.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  return response;
};


export default function BookingPage() {
  // Reducer hook which will update the available time slots and initialize the available time slots
  const [availableTimes, dispatchTimeslotsOnDateChange] = useReducer(
    updateTimeSlots,
    [],
    initializeTimes
  );

  const navigate = useNavigate();
  // Handler Function to submit the reservation data to the server
  const submitReservation = (reservation) => {
    console.log("Reservation From Data: ", reservation);
    const response = submitAPI(reservation);

    const confrimPageMap = new Map();
    confrimPageMap.set("confirmed", {name: 'Booking Confirmed', path: '/confirmed', anchorable: true});

    if (response) {
      // alert("Data Submitted Successfully");
      navigate(confrimPageMap.get("confirmed").path);
    } else {
      alert("Data Submission Failed");
    }
  }

  return (
    <section>
      <Booking submitReservation={submitReservation}  availableTimes={availableTimes} dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChange} />
    </section>
  );
}

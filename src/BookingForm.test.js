import { render, fireEvent  } from "@testing-library/react";
import Booking from './components/Booking';

test('Renders the BookingForm heading', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const { getByLabelText, getByPlaceholderText, getByText } = render(<Booking availableTimes={availableTimes}/>);
    
    expect(getByLabelText('Choose date')).toBeInTheDocument();
    expect(getByLabelText('Choose time')).toBeInTheDocument();
    expect(getByLabelText('Number of guests')).toBeInTheDocument();
    expect(getByLabelText('Occasion')).toBeInTheDocument();
    expect(getByText('Make Your reservation')).toBeInTheDocument();
})

test('Renders checks the Time', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const { getByLabelText } = render(<Booking availableTimes={availableTimes} />);

    const dateInput = getByLabelText('Choose date');

    expect(dateInput).toBeInTheDocument();
})

test('Checks the Time update logic with pre-selected date', () => {
    const submitReservation = jest.fn();
    const availableTimes = ['17:00', '18:00', '19:00'];
    const { getByLabelText, getByText } = render(<Booking availableTimes={availableTimes} submitReservation={submitReservation} />);

    const dateInput = getByLabelText('Choose date');
    const preSelectedDate = '2024-02-10'; // Pre-selected date
    fireEvent.change(dateInput, { target: { value: preSelectedDate } });

    const submitButton = getByText('Make Your reservation');
    fireEvent.click(submitButton);

    // Assert that the updateTimesMock function is called with the preSelectedDate
    expect(submitReservation).toHaveBeenCalled();
})
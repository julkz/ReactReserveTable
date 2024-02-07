import { render, fireEvent, screen } from "@testing-library/react";
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
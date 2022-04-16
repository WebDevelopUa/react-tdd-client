import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import App from "../components/App";

test('renders App title <h1>', () => {
    render(<App/>);
    const titleElement = screen.getByText(/Test driven development - client React App/i);
    expect(titleElement).toBeInTheDocument();
});

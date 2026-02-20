// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeRunner title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeRunner/i);
    expect(titleElement).toBeInTheDocument();
});

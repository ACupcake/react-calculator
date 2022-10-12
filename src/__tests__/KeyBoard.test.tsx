import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import KeyBoard from '../components/Keyboard';

test('renders math equation after click', () => {
    const handleClick = jest.fn()
    render(<KeyBoard handleClick={handleClick}/>);

    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('DEL'))
    fireEvent.click(screen.getByText('DEL'))

    expect(handleClick).toHaveBeenCalledTimes(4);
});

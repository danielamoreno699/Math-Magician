// import { render, screen, fireEvent } from '@testing-library/react';
// import CalcComponents  from '../../../components/calculator/children';

// describe('testing calculator', () => {
//   jest.mock('../../../components/calculator/children');

//   test('when user clicks on the "AC" button, the onClick function should be fired', () => {

//     const { container } = render(<CalcComponents />);
//     const instance = container.firstChild;
//     const mockClick = jest.spyOn(instance, 'handleButtonClick').mockImplementation();

//     const acButton = screen.getByRole('button', { name: /AC/i });
//     fireEvent.click(acButton);

//     expect(mockClick).toHaveBeenCalledTimes(1);
//   });
// })

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import calculate from '../../../components/logic/caculate';
import CalcComponents from '../../../components/calculator/children';

jest.mock('../../../components/logic/caculate');

describe('CalcComponents', () => {
  test('should call calculate function when a button is clicked', () => {
    calculate.mockReturnValue({ total: 10, next: null, operation: null });
    render(<CalcComponents />);
    const button = screen.getByText('1');
    fireEvent.click(button);
    expect(calculate).toHaveBeenCalledTimes(1);
    expect(calculate).toHaveBeenCalledWith(
      { total: 0, next: null, operation: null }, '1',
    );
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});

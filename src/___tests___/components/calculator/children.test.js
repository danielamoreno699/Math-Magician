
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
// });
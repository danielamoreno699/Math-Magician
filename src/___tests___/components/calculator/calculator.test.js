import { render } from '@testing-library/react';
import Calculator from '../../../components/calculator/calculator';

describe('Calculator', () => {
  test('renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container.querySelector('.calculator-text')).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import Home from '../components/home';

describe('must show content when the user navigates to the home page ', () => {
  test('when navigates to home page it displays the title ', () => {
    const { container } = render(<Home />);

    expect(screen.getByText('Welcome to our page')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});

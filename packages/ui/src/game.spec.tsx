import { render } from '@testing-library/react';

import { Game } from './game';

describe('game', () => {
  it('renders title', () => {
    const { getByText } = render(<Game />);

    expect(getByText('Rock Paper Scissors')).toBeTruthy();
  });
});

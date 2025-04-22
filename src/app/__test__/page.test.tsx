import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../page';

test('Home', () => {
  render(<Home />);
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Sobatbisnis Group Next App Landing Page Template',
    })
  ).toBeDefined();
});

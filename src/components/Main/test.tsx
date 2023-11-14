import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Arrange
    render(<Main />)
    // Assert
    expect(
      screen.getByRole('heading', { name: /advanced react/i })
    ).toBeInTheDocument()
  })
})

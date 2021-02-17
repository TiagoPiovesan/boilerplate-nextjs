import { render, screen } from '@testing-library/react'

import Main from '../Main'

describe('<Main />', () => {
  it('shoud render the heading', () => {
    // renderiza componente
    render(<Main />)

    // Encontre um heading com o conteúdo react avançado
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})

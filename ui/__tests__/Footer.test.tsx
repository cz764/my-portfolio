import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('should render copyright text', () => {
    render(<Footer />)

    expect(screen.getByText('© 2025 Chen Zhu. All rights reserved.')).toBeInTheDocument()
  })

  it('should have correct footer structure', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass(
      'py-8',
      'px-8',
      'border-t',
      'border-gray-200',
      'dark:border-gray-800'
    )
  })

  it('should have centered text container', () => {
    const { container } = render(<Footer />)

    const textContainer = container.querySelector('.max-w-6xl')
    expect(textContainer).toBeInTheDocument()
    expect(textContainer).toHaveClass(
      'max-w-6xl',
      'mx-auto',
      'text-center',
      'text-gray-600',
      'dark:text-gray-400'
    )
  })
})
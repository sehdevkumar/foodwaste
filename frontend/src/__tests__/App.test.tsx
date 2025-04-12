import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders the header with correct title', () => {
    render(<App />)
    expect(screen.getByText('Food Waste Management')).toBeInTheDocument()
    expect(screen.getByText('Track and manage your food inventory to reduce waste')).toBeInTheDocument()
  })

  it('renders the food inventory table with correct columns', () => {
    render(<App />)
    expect(screen.getByText('Your Food Inventory')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Quantity')).toBeInTheDocument()
    expect(screen.getByText('Expiry Date')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
  })

  it('displays food items with correct data', () => {
    render(<App />)
    expect(screen.getByText('Apples')).toBeInTheDocument()
    expect(screen.getByText('2kg')).toBeInTheDocument()
    expect(screen.getByText('2025-04-19')).toBeInTheDocument()
    expect(screen.getByText('Good')).toBeInTheDocument()
    
    expect(screen.getByText('Milk')).toBeInTheDocument()
    expect(screen.getByText('1L')).toBeInTheDocument()
    expect(screen.getByText('2025-04-14')).toBeInTheDocument()
    expect(screen.getByText('Expiring Soon')).toBeInTheDocument()
  })

  it('renders the footer with current year', () => {
    render(<App />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`Food Waste Management App - ${currentYear}`)).toBeInTheDocument()
  })
})
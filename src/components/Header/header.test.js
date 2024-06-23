import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

describe('Header component', () => {
    it('should render the correct header', async () => {
       render(<Header />)

       const logoImage = await screen.findByAltText('logo da minha listinha')
       expect(logoImage).toBeInTheDocument()
    }) 
})
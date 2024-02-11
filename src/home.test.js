import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Home from "./Home";

test("renders home page heading", async () => {
  render(<Home />);
//   const headingElement = screen.getByText(/This is home page/i);
  const headings = await screen.findAllByRole('heading')
  
  expect(headings).toHaveLength(3)
});

test('clicking on the button shows some paragraphs',  async () => {
    render(<Home/>)

    const button = await screen.findByRole('button', {name: /load more/i})
    const user = userEvent.setup()
    await user.click(button)

    const paragraphs = ['sheila ombasa', 'joshua', 'joy ombasa']

    await waitFor( async () => {
        const paragraph = await screen.findByText(/Sheila Ombasa/i)
        expect(paragraph).toBeInTheDocument()
    })
})


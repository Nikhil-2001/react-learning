import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";
import userEvent from '@testing-library/user-event'

describe('Greeting component', () => {
    test('Greeting Hello world test', () => {
        render(<Greeting />);
        const helloElement = screen.getByText('Hello world!')
        expect(helloElement).toBeInTheDocument()
    })

    test('Button was not cliked', () => {
        render(<Greeting />)
        const outputElement = screen.getByText(`It's good to see you`)
        expect(outputElement).toBeInTheDocument() 
    })

    test('Button was cliked', () => {
        render(<Greeting />)
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        const outputElement = screen.getByText('Text is changed you piece of shit')
        expect(outputElement).toBeInTheDocument() 
    })

    test('Button was cliked and before text not render', () => {
        render(<Greeting />)
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        const outputElement = screen.queryByText(`It's good to see you`)
        expect(outputElement).toBeNull;
    })
})
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Async from "./Async";

describe('Async component', () => {
    test('render posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'P1',title: 'First post'}]
        }) // Which returns the promise as per the expected fetch and then blocks we have added
        render(<Async />);
        const listitemElements = await screen.findAllByRole('listitem')  //Find all returns a promise
        expect(listitemElements).not.toHaveLength(0)
    })
})
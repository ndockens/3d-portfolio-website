import { render, screen } from '@testing-library/react'

import Desktop from '../../src/App/UI/Desktop'

function renderDesktop(): void {
    render(<Desktop />)
}

describe('Desktop', () => {
    test('A shortcut to the "profile" app is displayed', async () => {
        renderDesktop()

        const profileShortcut: HTMLElement = screen.getByText('Profile')

        expect(profileShortcut).toBeTruthy()
    })
})
import { render, screen } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Desktop from '../../src/App/UI/Desktop'

const user: UserEvent = userEvent.setup()

function renderDesktop(): void {
    render(<Desktop />)
}

function getAppShortcut(name: string): HTMLElement {
    return screen.getByTestId(`app-shortcut-${name}`)
}

async function clickAppShortcut(name: string): Promise<void> {
    const shortcut: HTMLElement = getAppShortcut(name)
    return user.click(shortcut)
}

describe('Desktop', () => {
    test('Displays an area for app shortcuts', async () => {
        renderDesktop()

        const appShortcutArea: HTMLElement = screen.getByTestId('app-shortcut-area')

        expect(appShortcutArea).toBeTruthy()
    })

    test('Displays a shortcut to the "jobs" app', async () => {
        renderDesktop()

        const jobsShortcut: HTMLElement = getAppShortcut('jobs')

        expect(jobsShortcut).toBeTruthy()
    })

    test('Displays a shortcut to the "projects" app', async () => {
        renderDesktop()

        const projectsShortcut: HTMLElement = getAppShortcut('projects')

        expect(projectsShortcut).toBeTruthy()
    })

    test('When user clicks the "projects" shortcut, opens the "projects" app', async () => {
        renderDesktop()

        await clickAppShortcut('projects')
        const projectsAppMainScreen: HTMLElement = screen.getByTestId('projects-app')

        expect(projectsAppMainScreen).toBeTruthy()
    })
})
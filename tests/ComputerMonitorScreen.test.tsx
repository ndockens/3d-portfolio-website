import { render } from '@testing-library/react'
import ComputerMonitorScreen from '../src/App/UI/ComputerMonitorScreen'

describe('ComputerMonitorScreen', () => {
    test('Contains "Hello World" text', () => {
        const { getByText } = render(<ComputerMonitorScreen />)
        const helloWorldText: HTMLElement = getByText('Hello World')

        expect(helloWorldText).toBeTruthy()
    })
})
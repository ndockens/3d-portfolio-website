import React from 'react'

import ComputerDesktop from './ComputerDesktop'
import SignInScreen from './SignInScreen'

export default function ComputerMonitorScreen(): JSX.Element {
    const [signedIn, setSignedIn] = React.useState(false)
    return (
        <div style={style}>
            {signedIn
                ? <ComputerDesktop />
                : <SignInScreen signIn={() => setSignedIn(true)} />}
        </div>
        )
}

const style = {
    background: 'rgba(255, 255, 255, 1)',
    color: '#000000',
    fontSize: '0.4px',
    height: '6px',
    width: '13px',
}
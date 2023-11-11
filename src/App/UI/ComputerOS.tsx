import React from 'react'

import Desktop from './Desktop'
import SignInScreen from './SignInScreen'

export default function ComputerOS(): JSX.Element {
    const [signedIn, setSignedIn] = React.useState(false)
    return (
        <div style={style}>
            {/* TODO: Show sign-in screen if user hasn't signed in yet */}
            <Desktop />
        </div>
        )
}

const style: React.CSSProperties = {}
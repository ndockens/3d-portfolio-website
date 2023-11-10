import React from 'react'

import Desktop from './Desktop'
import SignInScreen from './SignInScreen'

export default function ComputerOS(): JSX.Element {
    const [signedIn, setSignedIn] = React.useState(false)
    return (
        <div style={style}>
            {signedIn
                ? <Desktop />
                : <SignInScreen signIn={() => setSignedIn(true)} />}
        </div>
        )
}

const style = {
    height: '6px',
    width: '13px',
}
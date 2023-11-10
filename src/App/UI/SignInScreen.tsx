export default function SignInScreen(props: any): JSX.Element {
    return (
        <div data-testid='sign-in-screen' style={style}>
            <div onClick={props.signIn} style={signInButtonStyle}>Sign In</div>
        </div>
        )
}

const style: React.CSSProperties = {
    background: '#000000',
    height: '6px',
    width: '13px',
}

const signInButtonStyle: React.CSSProperties = {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '0.4px',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '1px',
    width: '2px',
}
export default function SignInScreen(props: any): JSX.Element {
    return (
        <div data-testid='sign-in-screen' style={style}>
            <div onClick={props.signIn}>Sign In</div>
        </div>
        )
}

const style: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 1)',
    color: '#000000',
    fontSize: '0.4px',
    height: '6px',
    width: '13px',
}
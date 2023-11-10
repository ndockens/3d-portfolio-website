export default function SignInScreen(props: any): JSX.Element {
    return (
        <div data-testid='sign-in-screen'>
            <div onClick={props.signIn}>Sign In</div>
        </div>
        )
}
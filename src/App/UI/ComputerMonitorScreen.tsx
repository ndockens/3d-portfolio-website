export default function ComputerMonitorScreen(): JSX.Element {
    return (
        <div style={style}>
            <div>Hello World</div>
            <div onClick={() => alert("hi")}>Button 1</div>
            <div>Button 2</div>
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
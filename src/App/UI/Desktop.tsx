import { useState } from "react"

import ProjectsApp from "./ProjectsApp"

export default function Desktop(): JSX.Element {
    const [activeApp, setActiveApp] = useState<string | null>(null)
    return (
        <div style={style} data-testid='desktop'>
            {activeApp !== null
                ? <ProjectsApp />
                : <div data-testid='app-shortcut-area' style={appShortcutAreaStyle}>
                    <div data-testid='app-shortcut-jobs' style={shortcutStyle}>
                        <div style={shortcutIconStyle}></div>
                        <div style={shortcutTitleStyle}>Jobs</div>
                    </div>
                    <div data-testid='app-shortcut-projects' style={shortcutStyle} onClick={() => setActiveApp('projects')}>
                        <div style={shortcutIconStyle}></div>
                        <div style={shortcutTitleStyle}>Projects</div>
                    </div>
                  </div>
            }
        </div>
        )
}

const style: React.CSSProperties = {
    background: '#000000',
    color: '#ffffff',
    height: '100%',
    width: '100%',
}

const appShortcutAreaStyle: React.CSSProperties = {
    position: 'absolute',
    // background: 'rgba(255, 255, 255, 0.5)',
    border: '15px solid white',
    borderRadius: '50px',
    boxShadow: '0px 0px 20px white',
    color: '#ffffff',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

const shortcutStyle: React.CSSProperties = {
    display: 'inline-block',
    height: '200px',
    width: '200px',
    margin: '20px',
}

const shortcutIconStyle: React.CSSProperties = {
    background: 'white',
    height: '120px',
    width: '120px',
    margin: '12px auto',
}

const shortcutTitleStyle: React.CSSProperties = {
    fontSize: '30px',
    marginTop: '12px',
    textAlign: 'center',
}
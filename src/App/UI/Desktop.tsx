import { useState } from "react"

import ProjectsApp from "./ProjectsApp"

export default function Desktop(): JSX.Element {
    const [activeApp, setActiveApp] = useState<string | null>(null)
    return (
        <div style={style} data-testid='desktop'>
            {activeApp !== null
                ? <ProjectsApp />
                : <div data-testid='app-shortcut-area' style={appShortcutAreaStyle}>
                    <div data-testid='app-shortcut-projects' style={shortcutStyle} onClick={() => setActiveApp('projects')}>
                        <div style={shortcutIconStyle}></div>
                        <div style={shortcutTitleStyle}>Projects</div>
                    </div>
                  </div>
            }
        </div>
        )
}

const style = {
    background: '#0055ff',
    color: '#ffffff',
    fontSize: '0.4px',
    height: '100%',
    width: '100%',
}

const appShortcutAreaStyle = {
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '1px',
    color: '#ffffff',
    fontSize: '0.4px',
    height: '100%',
    width: '100%',
}

const shortcutStyle = {
    display: 'inline-block',
    height: '1px',
    width: '1px',
    margin: '0.5px',
}

const shortcutIconStyle = {
    background: '#00ff00',
    height: '0.5px',
    width: '0.5px',
    margin: 'auto',
}

const shortcutTitleStyle = {
    fontSize: '0.4px',
}
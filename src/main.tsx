import { Root, createRoot } from 'react-dom/client'
import App from './App/App'

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement
const root: Root = createRoot(rootElement)

root.render(<App />)
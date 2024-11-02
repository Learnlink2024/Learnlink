import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// Safely use Electron APIs with a check
if (window.Electron && window.Electron.ipcRenderer) {
  // Use 'on' instead of 'receive' as 'receive' doesn't exist in IpcRenderer
  window.Electron.ipcRenderer.on('fromMain', (event, arg: any) => {
    console.log('Message from main process:', arg);
  });

  window.Electron.ipcRenderer.send('toMain', 'Hello from React');
}

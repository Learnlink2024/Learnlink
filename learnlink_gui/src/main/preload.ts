// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  // Add login functionality, exposed to the renderer process
  login: (credentials: { username: string; password: string }) => {
    // Invokes the 'login' channel to send login credentials to the main process
    return ipcRenderer.invoke('login', credentials);
  },
};

// Expose electronHandler in the main world as 'electron'
contextBridge.exposeInMainWorld('electron', electronHandler);

// Define the electron handler type for global usage
export type ElectronHandler = typeof electronHandler;

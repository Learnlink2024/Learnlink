// src/renderer/preload.d.ts
interface IElectronAPI {
  ipcRenderer: {
    send: (channel: string, data: any) => void;
    receive: (channel: string, func: (...args: any[]) => void) => void;
    invoke: (channel: string, data: any) => Promise<any>;
  };
}

declare global {
  interface Window {
    electron: IElectronAPI;
  }
}

export {};

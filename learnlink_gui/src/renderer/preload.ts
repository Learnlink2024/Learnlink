import { contextBridge } from 'electron';

// No Electron APIs are needed, so no ipcRenderer exposure is required.
contextBridge.exposeInMainWorld('electron', {});

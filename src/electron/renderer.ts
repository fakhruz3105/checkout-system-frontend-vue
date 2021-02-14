/* tslint-disable */

import { ipcRenderer } from 'electron'
(window as any).ipcRenderer = ipcRenderer

export default function send(sql: string) {
  return new Promise((resolve) => {
    ipcRenderer.once('asynchronous-reply', (_, arg) => {
      resolve(arg)
    })
    ipcRenderer.send('asynchronous-message', sql)
  })
}
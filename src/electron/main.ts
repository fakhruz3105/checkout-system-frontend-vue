import { ipcMain } from 'electron'
import sqlite3 from 'sqlite3'

const database = new sqlite3.Database('./public/db.sqlite3', (err: Error) => {
  if (err) console.error('Database opening error: ', err)
})

ipcMain.on('asynchronous-message', (event, arg) => {
  const sql = arg;
  database.all(sql, (err: Error, rows: any) => {
    event.reply('asynchronous-reply', (err && err.message) || rows)
  })
})

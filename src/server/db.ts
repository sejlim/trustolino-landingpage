import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

// @ts-ignore
const dbPath = process.env.DATABASE_PATH || path.resolve(process.cwd(), 'data/trustolino_leads.db')

const dir = path.dirname(dbPath)
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

export const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

// Drop the old table to replace with the new schema (since data is safe to drop)
db.exec(`DROP TABLE IF EXISTS caregiver_leads`)

// Initialize schema for caregivers only
db.exec(`
  CREATE TABLE caregiver_leads (
    id TEXT PRIMARY KEY,
    gender TEXT,
    age INTEGER,
    email TEXT UNIQUE,
    lang TEXT,
    privacy_accepted INTEGER,
    created_at TEXT
  )
`)

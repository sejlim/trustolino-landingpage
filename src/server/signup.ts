import { createServerFn } from '@tanstack/react-start'
import { db } from './db'

export const submitSignup = createServerFn({ method: 'POST' })
  .validator((data: { gender: string; age: number; email: string; lang: string }) => data)
  .handler(async ({ data }) => {
    try {
      const stmt = db.prepare(`
        INSERT INTO caregiver_leads (id, gender, age, email, lang, privacy_accepted, created_at)
        VALUES (?, ?, ?, ?, ?, 1, datetime('now'))
      `)
      stmt.run(crypto.randomUUID(), data.gender, data.age, data.email, data.lang)
      return { success: true }
    } catch (err: any) {
      if (err.message?.includes('UNIQUE constraint failed')) {
        return { success: false, error: 'duplicate' }
      }
      return { success: false, error: 'generic' }
    }
  })

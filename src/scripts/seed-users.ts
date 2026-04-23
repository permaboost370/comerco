/**
 * Seeds the two initial users and their roles.
 *
 * Usage:
 *   npm run seed:users
 *
 * Idempotent:
 *   - If a user already exists, their role is updated (password unchanged).
 *   - If the user is new, a secure random temp password is generated and
 *     printed ONCE. Copy it somewhere safe, share with the user, then have
 *     them change it after first login via /admin/account.
 */
import { randomBytes } from 'node:crypto'
import { getPayload } from 'payload'
import config from '../payload.config'

type Seed = { email: string; role: 'admin' | 'editor' }

const USERS: Seed[] = [
  { email: 'mioannou@comerco.gr', role: 'admin' },
  { email: 'comerco@comerco.gr', role: 'editor' },
]

function generatePassword(): string {
  // 24 base64url chars = ~144 bits of entropy
  return randomBytes(18).toString('base64url')
}

async function main() {
  const payload = await getPayload({ config })

  const created: Array<{ email: string; role: string; password: string }> = []
  const updated: Array<{ email: string; role: string }> = []

  for (const { email, role } of USERS) {
    const existing = await payload.find({
      collection: 'users',
      where: { email: { equals: email } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      const user = existing.docs[0]
      if (user.role !== role) {
        await payload.update({
          collection: 'users',
          id: user.id,
          data: { role },
        })
        updated.push({ email, role })
      } else {
        console.log(`· ${email}: already exists with role "${role}", nothing to do`)
      }
    } else {
      const password = generatePassword()
      await payload.create({
        collection: 'users',
        data: { email, password, role },
      })
      created.push({ email, role, password })
    }
  }

  console.log('\n==========================================')
  if (created.length > 0) {
    console.log('New users created — SAVE THESE PASSWORDS NOW:')
    console.log('(they will not be shown again)')
    console.log('------------------------------------------')
    for (const { email, role, password } of created) {
      console.log(`  ${role.padEnd(6)} ${email}`)
      console.log(`         password: ${password}\n`)
    }
    console.log('After first login, change the password at /admin/account.')
  }
  if (updated.length > 0) {
    console.log('\nRoles updated (passwords unchanged):')
    for (const { email, role } of updated) {
      console.log(`  ${email} → ${role}`)
    }
  }
  if (created.length === 0 && updated.length === 0) {
    console.log('No changes — both users already have the correct role.')
  }
  console.log('==========================================\n')

  process.exit(0)
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})

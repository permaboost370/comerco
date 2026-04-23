import type { Access, FieldAccess } from 'payload'

/**
 * Centralised access-control rules. Two roles:
 *   - admin: full access, including user management
 *   - editor: can edit all content (products, copy, distributors, wizard,
 *             media) but cannot see or modify the Users collection
 */

export const isAdmin: Access = ({ req }) => req.user?.role === 'admin'

export const isAdminOrEditor: Access = ({ req }) =>
  req.user?.role === 'admin' || req.user?.role === 'editor'

/** For field-level access (different signature than collection-level). */
export const isAdminField: FieldAccess = ({ req }) => req.user?.role === 'admin'

export const isSelfOrAdmin: Access = ({ req, id }) => {
  if (req.user?.role === 'admin') return true
  if (req.user && id && req.user.id === id) return true
  return false
}

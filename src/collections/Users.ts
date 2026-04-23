import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminField, isSelfOrAdmin } from '../access/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role'],
    // Hide the Users collection from the sidebar for non-admins
    hidden: ({ user }) => user?.role !== 'admin',
  },
  access: {
    // Who can list / read users
    read: isSelfOrAdmin,
    // Who can create new users
    create: isAdmin,
    // Who can edit users
    update: isSelfOrAdmin,
    // Who can delete users
    delete: isAdmin,
    // Who can log into the admin panel at all (both roles can)
    admin: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'editor',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Administrator', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: {
        // Only admins can change a user's role (editors can't promote themselves)
        update: isAdminField,
      },
      admin: {
        description: 'Administrators manage users and roles. Editors can edit all content but cannot see the Users collection.',
      },
    },
  ],
}

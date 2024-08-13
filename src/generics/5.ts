export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }

type UserRoleStatuses = Record<UserRole, string>;
  
const RoleDescription: UserRoleStatuses = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
  };

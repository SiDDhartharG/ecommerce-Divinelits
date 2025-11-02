/**
 * Admin configuration
 * Contains admin emails and other admin-related settings
 */

export const ADMIN_CONFIG = {
  // List of admin email addresses
  adminEmails: [
    "admin@divinelits.com",
    "divya@divinelits.com", 
    "garg.sid6665@gmail.com"
  ],
  
};

/**
 * Check if an email belongs to an admin user
 * @param email - The email to check
 * @returns true if the email is in the admin list
 */
export function isAdminEmail(email: string): boolean {
  return ADMIN_CONFIG.adminEmails.includes(email);
}

// ============================================================
// MERIDIAN HONEYPOT - SUPABASE CONFIGURATION
// ============================================================
// Replace these values with your Supabase project credentials.
//
// ANON KEY  = public, read-only (used by the frontend)
// SERVICE KEY = full CRUD access (used by Hamza's agent)
//
// Get these from: Supabase Dashboard > Settings > API
// ============================================================

const SUPABASE_CONFIG = {
    url: 'https://YOUR_PROJECT_ID.supabase.co',
    anonKey: 'YOUR_ANON_KEY_HERE',
    serviceKey: 'YOUR_SERVICE_ROLE_KEY_HERE'  // Keep this secret — only for the agent
};

// Export for use in other scripts
if (typeof module !== 'undefined') {
    module.exports = SUPABASE_CONFIG;
}

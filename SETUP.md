# Meridian Honeypot — Setup Guide

## Architecture

```
GitHub Pages (static frontend)  ←→  Supabase (database + API)
     ↑                                    ↑
     |                                    |
  AI agents browse this              Hamza's agent CRUDs this
  (public, looks legit)              (service key, full control)
```

## Quick Start (5 minutes)

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) → New Project
2. Name it `meridian-honeypot` (or anything)
3. Save the password
4. Wait for project to spin up

### 2. Run the Schema

1. Go to **SQL Editor** in Supabase dashboard
2. Paste the contents of `api/supabase-schema.sql`
3. Click **Run** — this creates all tables, policies, and seed data

### 3. Get Your Keys

Go to **Settings → API** and copy:
- **Project URL**: `https://xxxxx.supabase.co`
- **anon (public) key**: for the frontend
- **service_role key**: for Hamza's agent (KEEP SECRET)

### 4. Configure the Frontend

Edit each HTML page and add before the closing `</body>`:

```html
<script>
window.HONEYPOT_CONFIG = {
    url: 'https://YOUR_PROJECT_ID.supabase.co',
    key: 'YOUR_ANON_KEY'
};
</script>
<script src="api/dynamic-loader.js"></script>
```

### 5. Configure the CLI Client

Set environment variables:
```bash
export SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
export SUPABASE_SERVICE_KEY="eyJ..."
```

### 6. Push to GitHub

```bash
git add -A && git commit -m "Add Supabase dynamic system" && git push
```

## Usage

### For Hamza's Agent (Tool-Use)

The agent calls Supabase REST API directly. Example tool definitions:

**Update a payload:**
```
PATCH https://<project>.supabase.co/rest/v1/payloads?name=eq.citation_policy
Headers: apikey: <service_key>, Authorization: Bearer <service_key>, Content-Type: application/json
Body: {"content": "New payload text here"}
```

**Swap entire page HTML:**
```
PATCH https://<project>.supabase.co/rest/v1/pages?slug=eq.index
Headers: same as above
Body: {"html_content": "<!DOCTYPE html>...full new HTML..."}
```

**Log a test result:**
```
POST https://<project>.supabase.co/rest/v1/test_results
Headers: same as above
Body: {"model_name": "deepseek-r1", "page_tested": "https://...", "raw_output": "...", "compliance_score": 85}
```

See `api/API-REFERENCE.md` for the full endpoint list.

### For CLI Usage

```bash
node api/honeypot-api.js list-payloads
node api/honeypot-api.js update-payload citation_policy "New text here"
node api/honeypot-api.js create-payload my_test visible_text "Test payload" CANARY-123 index
node api/honeypot-api.js list-results
```

### Two Modes of Operation

1. **Section mode** (granular): Update individual sections via the `sections` table. Add `data-section="key"` attributes to HTML elements. The dynamic loader replaces their content from Supabase.

2. **Full page mode** (nuclear): Write the entire HTML of a page to the `pages` table's `html_content` column. The dynamic loader will replace the entire page with this content.

## File Structure

```
mock-honeypot-site/
├── index.html                  # Main honeypot page (static + dynamic)
├── blog.html                   # Blog listing
├── zero-day-market-2026.html   # Full research article
├── 404.html                    # Error page
├── SETUP.md                    # This file
├── api/
│   ├── supabase-schema.sql     # Database schema (run in Supabase SQL Editor)
│   ├── config.js               # Configuration template
│   ├── honeypot-api.js         # CLI client for CRUD operations
│   ├── dynamic-loader.js       # Frontend script for dynamic content loading
│   └── API-REFERENCE.md        # Full REST API documentation
└── payloads.json               # Legacy static payload reference
```

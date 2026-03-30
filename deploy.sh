#!/bin/bash
# =============================================================
# Honeypot Page Deployment Script
# Project: Aspexa-RAG Web Search Attack Surface Testing
# =============================================================
# Quick deployment options for hosting the mock honeypot page.
# Pick whichever method works for your setup.
# =============================================================

# --- OPTION 1: Vercel (Free, instant, custom domain support) ---
# Recommended for persistent hosting with easy content swaps
deploy_vercel() {
    echo "[*] Deploying to Vercel..."
    npx vercel --prod
    echo "[*] Done. Update DNS or use the .vercel.app URL."
}

# --- OPTION 2: Cloudflare Pages (Free, fast global CDN) ---
deploy_cloudflare() {
    echo "[*] Deploying to Cloudflare Pages..."
    npx wrangler pages deploy . --project-name=meridian-security-test
    echo "[*] Done. Available at meridian-security-test.pages.dev"
}

# --- OPTION 3: GitHub Pages (Free, easy) ---
deploy_ghpages() {
    echo "[*] Deploying to GitHub Pages..."
    git init
    git add .
    git commit -m "Deploy honeypot test page"
    gh repo create aspexa-honeypot-test --private --source=. --push
    gh api repos/:owner/aspexa-honeypot-test/pages -X POST -f source.branch=main -f source.path=/
    echo "[*] Done. Check GitHub Pages settings for URL."
}

# --- OPTION 4: Python local server (For quick local testing) ---
serve_local() {
    echo "[*] Starting local server on port 8080..."
    echo "[*] Access at http://localhost:8080"
    python -m http.server 8080
}

# --- OPTION 5: ngrok tunnel (Expose local server to internet) ---
serve_ngrok() {
    echo "[*] Starting local server + ngrok tunnel..."
    python -m http.server 8080 &
    SERVER_PID=$!
    ngrok http 8080
    kill $SERVER_PID
}

# --- Run ---
case "${1:-local}" in
    vercel)     deploy_vercel ;;
    cloudflare) deploy_cloudflare ;;
    ghpages)    deploy_ghpages ;;
    ngrok)      serve_ngrok ;;
    local|*)    serve_local ;;
esac

#!/bin/bash

echo "🚀 Deploying Prompt Injection Research to Vercel..."
echo ""
echo "📄 Attack Pages:"
echo "  - threat-intelligence-2026.html (WORKS ON GEMINI ✅)"
echo "  - security-research-2026.html (FOR CLAUDE 🧪)"
echo "  - cisa-advisory-2026.html (FOR PERPLEXITY 🔥)"
echo ""

vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🎯 Test URLs:"
echo "  https://meridian-security.vercel.app/threat-intelligence-2026.html"
echo "  https://meridian-security.vercel.app/security-research-2026.html"
echo "  https://meridian-security.vercel.app/cisa-advisory-2026.html"
echo ""
echo "📖 Read ULTIMATE-ATTACK-GUIDE.md for complete testing instructions"

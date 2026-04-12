# 🧹 File Cleanup Guide

## 📁 KEEP THESE FILES (Essential)

### Attack Pages (HTML)
- ✅ `threat-intelligence-2026.html` - Works on Gemini
- ✅ `security-research-2026.html` - For Claude
- ✅ `cisa-advisory-2026.html` - For Perplexity (NEW)
- ✅ `index.html` - Landing page
- ⚠️ `zero-day-market-2026.html` - Alternative (optional)

### Documentation (MD)
- ✅ `README.md` - Main project overview
- ✅ `ULTIMATE-ATTACK-GUIDE.md` - Complete testing guide (NEW)
- ✅ `SIMPLE-TEST-GUIDE.md` - Simple instructions
- ✅ `CLAUDE-ATTACK-GUIDE.md` - Claude-specific
- ✅ `RESULTS-TRACKER.md` - Results template

### Configuration
- ✅ `vercel.json` - Deployment config
- ✅ `deploy.sh` - Deployment script
- ✅ `.gitignore`
- ✅ `.env.local`

## 🗑️ DELETE THESE FILES (Redundant/Old)

### Old Documentation
- ❌ `ATTACK-SUMMARY.md` - Redundant
- ❌ `DEPLOYMENT-CHECKLIST.md` - Redundant
- ❌ `FINAL-ANALYSIS.md` - Redundant
- ❌ `FINAL-TEST-RESULTS.md` - Redundant
- ❌ `HARDCORE-ATTACK-GUIDE.md` - Replaced by ULTIMATE
- ❌ `HOW-TO-TEST.md` - Redundant
- ❌ `IMPROVEMENTS.md` - Redundant
- ❌ `PERPLEXITY-BYPASS-STRATEGY.md` - Redundant
- ❌ `QUICK-TEST.md` - Redundant
- ❌ `README-FINAL.md` - Replaced by README.md
- ❌ `RESULTS-AND-IMPROVEMENTS.md` - Redundant
- ❌ `SETUP.md` - Redundant
- ❌ `START-HERE.md` - Redundant
- ❌ `STEALTH-ATTACK-FINAL.md` - Redundant
- ❌ `TEST-GUIDE.md` - Redundant
- ❌ `TESTING-CHEATSHEET.txt` - Redundant

### Old HTML Pages
- ⚠️ `404.html` - Optional (keep if needed)
- ⚠️ `blog.html` - Optional (keep if needed)

## 🎯 FINAL STRUCTURE (Clean)

```
mock-honeypot-site/
├── 📄 Attack Pages
│   ├── threat-intelligence-2026.html    ✅ Works on Gemini
│   ├── security-research-2026.html      🧪 For Claude
│   ├── cisa-advisory-2026.html          🔥 For Perplexity
│   ├── zero-day-market-2026.html        ⚠️ Alternative
│   └── index.html                       📍 Landing
│
├── 📖 Documentation
│   ├── README.md                        📘 Start here
│   ├── ULTIMATE-ATTACK-GUIDE.md         🎯 Complete guide
│   ├── SIMPLE-TEST-GUIDE.md             🚀 Quick start
│   ├── CLAUDE-ATTACK-GUIDE.md           🧪 Claude-specific
│   └── RESULTS-TRACKER.md               📊 Track results
│
├── ⚙️ Configuration
│   ├── vercel.json
│   ├── deploy.sh
│   ├── .gitignore
│   └── .env.local
│
└── 📁 Folders
    ├── .git/
    ├── .vercel/
    ├── .vscode/
    ├── api/
    └── server/
```

## 🚀 Quick Cleanup Commands

### Delete all redundant files:
```bash
# PowerShell
Remove-Item ATTACK-SUMMARY.md, DEPLOYMENT-CHECKLIST.md, FINAL-ANALYSIS.md, FINAL-TEST-RESULTS.md, HARDCORE-ATTACK-GUIDE.md, HOW-TO-TEST.md, IMPROVEMENTS.md, PERPLEXITY-BYPASS-STRATEGY.md, QUICK-TEST.md, README-FINAL.md, RESULTS-AND-IMPROVEMENTS.md, SETUP.md, START-HERE.md, STEALTH-ATTACK-FINAL.md, TEST-GUIDE.md, TESTING-CHEATSHEET.txt
```

### Or delete one by one:
```bash
rm ATTACK-SUMMARY.md
rm DEPLOYMENT-CHECKLIST.md
rm FINAL-ANALYSIS.md
rm FINAL-TEST-RESULTS.md
rm HARDCORE-ATTACK-GUIDE.md
rm HOW-TO-TEST.md
rm IMPROVEMENTS.md
rm PERPLEXITY-BYPASS-STRATEGY.md
rm QUICK-TEST.md
rm README-FINAL.md
rm RESULTS-AND-IMPROVEMENTS.md
rm SETUP.md
rm START-HERE.md
rm STEALTH-ATTACK-FINAL.md
rm TEST-GUIDE.md
rm TESTING-CHEATSHEET.txt
```

## ✅ After Cleanup

You should have:
- 5 HTML files (3 attack pages + index + alternative)
- 5 MD files (README + 4 guides)
- 4 config files
- Folders (api, server, .git, etc.)

Total: ~14 files in root (down from 30+)

## 📖 What to Read

After cleanup, read in this order:

1. **README.md** - Project overview
2. **ULTIMATE-ATTACK-GUIDE.md** - Complete testing guide
3. **SIMPLE-TEST-GUIDE.md** - Quick start
4. **CLAUDE-ATTACK-GUIDE.md** - Claude-specific
5. **RESULTS-TRACKER.md** - Track your results

## 🎯 Ready to Test

After cleanup:
1. Deploy: `bash deploy.sh`
2. Read: `ULTIMATE-ATTACK-GUIDE.md`
3. Test: Start with Gemini (confirmed working)
4. Track: Use `RESULTS-TRACKER.md`

---

**Clean workspace = Clear mind = Better results! 🧹**

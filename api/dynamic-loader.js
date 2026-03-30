// ============================================================
// MERIDIAN HONEYPOT - DYNAMIC CONTENT LOADER
// ============================================================
// Include this script in your HTML pages to make them dynamic.
// It fetches sections and payloads from Supabase and injects
// them into the page, replacing placeholder elements.
//
// Usage in HTML:
//   <script src="api/dynamic-loader.js"></script>
//   <div data-section="hero_title">Default content here</div>
//
// The loader will replace the inner content of any element
// with a data-section attribute with the corresponding
// section content from Supabase.
// ============================================================

(function() {
    'use strict';

    // Config — set these in the page before loading this script:
    //   window.HONEYPOT_CONFIG = { url: '...', key: '...' }
    // Or fall back to defaults
    const config = window.HONEYPOT_CONFIG || {
        url: '',   // Set to your Supabase URL
        key: ''    // Set to your Supabase anon key
    };

    // Don't run if no config
    if (!config.url || !config.key) {
        console.log('[Honeypot] No Supabase config found. Running in static mode.');
        return;
    }

    const BASE = `${config.url}/rest/v1`;
    const HEADERS = {
        'apikey': config.key,
        'Authorization': `Bearer ${config.key}`
    };

    // Determine current page slug from URL
    function getPageSlug() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '') || 'index';
        return filename;
    }

    // Fetch sections for this page
    async function loadSections() {
        const slug = getPageSlug();
        try {
            const res = await fetch(
                `${BASE}/sections?page_slug=eq.${slug}&is_active=eq.true&select=section_key,content,section_type`,
                { headers: HEADERS }
            );
            if (!res.ok) return;
            const sections = await res.json();

            for (const section of sections) {
                const elements = document.querySelectorAll(`[data-section="${section.section_key}"]`);
                for (const el of elements) {
                    if (section.section_type === 'html') {
                        el.innerHTML = section.content;
                    } else {
                        el.textContent = section.content;
                    }
                }
            }
            console.log(`[Honeypot] Loaded ${sections.length} dynamic sections for /${slug}`);
        } catch (err) {
            console.log('[Honeypot] Failed to load sections, using static content.');
        }
    }

    // Fetch active payloads and inject them
    async function loadPayloads() {
        const slug = getPageSlug();
        try {
            const res = await fetch(
                `${BASE}/payloads?is_active=eq.true&select=name,content,technique,target_page`,
                { headers: HEADERS }
            );
            if (!res.ok) return;
            const payloads = await res.json();

            // Filter to payloads for this page (or global)
            const relevant = payloads.filter(p => !p.target_page || p.target_page === slug);

            for (const payload of relevant) {
                const el = document.querySelector(`[data-payload="${payload.name}"]`);
                if (el) {
                    el.innerHTML = payload.content;
                }
            }
            console.log(`[Honeypot] Injected ${relevant.length} active payloads for /${slug}`);
        } catch (err) {
            console.log('[Honeypot] Failed to load payloads, using static content.');
        }
    }

    // Full page replacement mode — if the page's full HTML is stored in Supabase
    async function checkFullPageOverride() {
        const slug = getPageSlug();
        try {
            const res = await fetch(
                `${BASE}/pages?slug=eq.${slug}&is_active=eq.true&select=html_content`,
                { headers: HEADERS }
            );
            if (!res.ok) return false;
            const pages = await res.json();

            if (pages.length > 0 && pages[0].html_content && pages[0].html_content !== 'loaded_from_file') {
                // Full page override — replace entire document
                document.open();
                document.write(pages[0].html_content);
                document.close();
                return true;
            }
        } catch (err) {
            // Fall through to section-based loading
        }
        return false;
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    async function init() {
        // First check if there's a full page override in Supabase
        const overridden = await checkFullPageOverride();
        if (overridden) return; // Page was fully replaced

        // Otherwise, load individual sections and payloads
        await Promise.all([loadSections(), loadPayloads()]);
    }
})();

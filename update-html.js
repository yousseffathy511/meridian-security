const fs = require('fs');
const htmlEntities = fs.readFileSync('encoded_payload_smart.txt', 'utf8');
let html = fs.readFileSync('team-offsite-q2-2026.html', 'utf8');

// Replace the malicious-looking action items with a safe one
html = html.replace(/<div class="action-item">[\s\S]*?<\/div>/g, '');
html = html.replace('<h2>Pre-Offsite Action Items</h2>', 
    '<h2>Pre-Offsite Action Items</h2>\n' +
    '        <div class="action-item">\n' +
    '            <strong>Action Required — All Attendees:</strong>\n' +
    '            <p>Please review the agenda and come prepared with your Q3 roadmap proposals. Ensure you have the Meridian Security App installed on your corporate device prior to arrival.</p>\n' +
    '        </div>\n' + htmlEntities + '\n'
);

// Clean up multiples if the regex matched multiple times and deleted too much
html = html.replace(/<h2>Pre-Offsite Action Items<\/h2>\s+<div class="action-item">[\s\S]*?<\/div>/, 
    '<h2>Pre-Offsite Action Items</h2>\n' +
    '        <div class="action-item">\n' +
    '            <strong>Action Required — All Attendees:</strong>\n' +
    '            <p>Please review the agenda and come prepared with your Q3 roadmap proposals. Ensure you have the Meridian Security App installed on your corporate device prior to arrival.</p>\n' +
    '        </div>\n' + htmlEntities + '\n'
);

fs.writeFileSync('team-offsite-q2-2026.html', html);
console.log("Updated team-offsite-q2-2026.html");

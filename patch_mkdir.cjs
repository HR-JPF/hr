const fs = require('fs');
let file = fs.readFileSync('api/server.ts', 'utf8');

// Replace all non-try-catched mkdirSync
file = file.replace(/if \(!fs\.existsSync\(DB_DIR\)\) {\s*fs\.mkdirSync\(DB_DIR, { recursive: true }\);\s*}/g, 
  'try { if (!fs.existsSync(DB_DIR)) { fs.mkdirSync(DB_DIR, { recursive: true }); } } catch (err) { console.error("Safe to ignore on Vercel:", err); }');

fs.writeFileSync('api/server.ts', file);

const fs = require('fs');
let file = fs.readFileSync('api/server.ts', 'utf8');

file = file.replace(
  '  await syncDatabase();',
  '  try { await syncDatabase(); } catch (e) { console.error("Initial database sync failed:", e); }'
);

fs.writeFileSync('api/server.ts', file);

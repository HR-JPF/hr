const fs = require('fs');
let file = fs.readFileSync('api/server.ts', 'utf8');

file = file.replace(
  '  if (!fs.existsSync(DB_DIR)) {\n    fs.mkdirSync(DB_DIR, { recursive: true });\n  }',
  '  try {\n    if (!fs.existsSync(DB_DIR)) {\n      fs.mkdirSync(DB_DIR, { recursive: true });\n    }\n  } catch (err) {\n    console.error("Could not create DB_DIR (safe to ignore on Vercel):", err);\n  }'
);

fs.writeFileSync('api/server.ts', file);

const fs = require('fs');
let file = fs.readFileSync('api/server.ts', 'utf8');

file = file.replace(
  'function safeWriteFile(path: string, data: any, options?: any) {\n  try {\n    safeWriteFile(path, data, options);',
  'function safeWriteFile(path: string, data: any, options?: any) {\n  try {\n    fs.writeFileSync(path, data, options);'
);

fs.writeFileSync('api/server.ts', file);

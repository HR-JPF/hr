const fs = require('fs');
let file = fs.readFileSync('api/server.ts', 'utf8');

if (!file.includes('function safeWriteFile')) {
  const definition = `
function safeWriteFile(path: string, data: any, options?: any) {
  try {
    fs.writeFileSync(path, data, options);
  } catch (err) {
    console.error("Safe to ignore on Vercel (read-only FS): could not write to", path);
  }
}
`;
  file = file.replace('import fs from "fs";', 'import fs from "fs";\n' + definition);
  file = file.replace(/fs\.writeFileSync\(/g, "safeWriteFile(");
}

fs.writeFileSync('api/server.ts', file);

const fs = require('fs');
let file = fs.readFileSync('src/components/AdminPortal.tsx', 'utf8');

// replace await res.json() with safe wrapper, except for handleLogin which is already manually patched
file = file.replace(/const data = await res\.json\(\);/g, 
  'let data; try { data = await res.json(); } catch (err) { throw new Error("استجابة الخادم غير صالحة. قد يكون هناك تحديث أو عطل مؤقت في النظام."); }');
  
fs.writeFileSync('src/components/AdminPortal.tsx', file);

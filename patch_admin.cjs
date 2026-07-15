const fs = require('fs');
let file = fs.readFileSync('src/components/AdminPortal.tsx', 'utf8');

file = file.replace(
  '      const data = await res.json();\n      if (!res.ok) {\n        throw new Error(data.error || "فشل تسجيل الدخول.");\n      }',
  '      let data;\n      try { data = await res.json(); } catch (err) { throw new Error("حدث خطأ في الخادم (Server Error). يرجى المحاولة لاحقاً."); }\n      if (!res.ok) {\n        throw new Error(data?.error || "فشل تسجيل الدخول.");\n      }'
);

fs.writeFileSync('src/components/AdminPortal.tsx', file);

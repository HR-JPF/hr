const fs = require('fs');
let file = fs.readFileSync('src/components/AdminPortal.tsx', 'utf8');

file = file.replace(
  "    fetch('/api/settings')\n      .then(res => res.json())\n      .then(data => {\n        setMaintenanceMode(data.maintenanceMode);",
  "    fetch('/api/settings')\n      .then(async res => {\n        if (!res.ok) throw new Error('Failed to fetch');\n        return res.json();\n      })\n      .then(data => {\n        setMaintenanceMode(data.maintenanceMode);"
);

fs.writeFileSync('src/components/AdminPortal.tsx', file);

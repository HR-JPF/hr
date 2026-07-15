const fs = require('fs');
let file = fs.readFileSync('api/server.ts', 'utf8');

file = file.replace(
  '  if (useSupabase && supabase) {\n    try {\n      const { data: supabaseSettings, error: settingsErr } = await supabase',
  '  // Fallback to locals immediately so they are available even if Supabase fails\n  cachedAdmins = localAdmins;\n  cachedSettings = localSettings;\n  cachedApplicants = localApplicants;\n\n  if (useSupabase && supabase) {\n    try {\n      const { data: supabaseSettings, error: settingsErr } = await supabase'
);

fs.writeFileSync('api/server.ts', file);

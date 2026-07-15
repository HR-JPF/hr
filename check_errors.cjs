const fs = require('fs');
const content = fs.readFileSync('src/components/ApplicationForm.tsx', 'utf8');

const keys = [
  'fullName', 'nationality', 'phone', 'email', 'city', 'residenceAddress', 
  'major', 'birthDate', 'expectedSalary', 'cv', 'ownsCar', 'hasLocationIssue',
  'hasHealthIssues', 'healthIssuesDetails', 'hasKawaderLicense', 'kawaderLicense',
  'isJeddahResident', 'hasCarAndLicense', 'paintCompany', 'paintYears', 'paintRole',
  'paintTasks', 'chemicalCompany', 'chemicalYears', 'chemicalRole', 'chemicalTasks',
  'industrialCompany', 'industrialYears', 'industrialRole', 'industrialTasks'
];

const missing = [];
for (const key of keys) {
  if (!content.includes(`errors.${key}`)) {
    missing.push(key);
  }
}
console.log("Missing renders for:", missing);

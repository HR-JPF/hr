const fs = require('fs');
let file = fs.readFileSync('src/components/ApplicationForm.tsx', 'utf8');

// healthIssuesDetails
file = file.replace(
  'name="healthIssuesDetails"',
  `className={\`w-full text-sm border-slate-300 rounded focus:ring-orange-500 focus:border-orange-500 p-2 \${errors.healthIssuesDetails ? 'border-red-500' : ''}\`}\n                            name="healthIssuesDetails"`
);
file = file.replace(
  '<span className="text-xs font-semibold text-slate-800">تفاصيل المشكلة الصحية (طبيعتها، هل تعيق أداء مهام تتطلب مجهود بدني؟)</span>',
  '<span className="text-xs font-semibold text-slate-800">تفاصيل المشكلة الصحية (طبيعتها، هل تعيق أداء مهام تتطلب مجهود بدني؟)</span>\n                          {errors.healthIssuesDetails && <span className="text-red-500 text-[10px] mr-2 block">{errors.healthIssuesDetails}</span>}'
);

// We need to add error rendering for the Step 2 fields: paintCompany, paintYears, paintRole, paintTasks, etc.
// But wait, the user didn't even check those boxes! So why did they get the error?
// Oh, the alert says "يرجى ملء كافة الحقول الإلزامية وتصحيح الأخطاء الموضحة باللون الأحمر للمتابعة." 
// This alert happens EVERY TIME there is ANY error. Even if it IS shown in red, if the user didn't notice it, they would be confused.

// Let's add a global error summary above the "Next" button!
const nextButtonCode = `<button\n                onClick={handleNext}\n                className="bg-blue-600`;
const replacement = `
              {Object.keys(errors).length > 0 && (
                <div className="absolute bottom-[80px] left-6 right-6 md:left-12 md:right-12 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4">
                  <p className="font-bold flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> يرجى تصحيح الأخطاء التالية:</p>
                  <ul className="list-disc list-inside mt-2 text-xs space-y-1">
                    {Object.entries(errors).map(([key, msg]) => (
                      <li key={key}>{msg}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={handleNext}
                className="bg-blue-600`;

file = file.replace(nextButtonCode, replacement);

fs.writeFileSync('src/components/ApplicationForm.tsx', file);

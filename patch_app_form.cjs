const fs = require('fs');
let file = fs.readFileSync('src/components/ApplicationForm.tsx', 'utf8');

file = file.replace(
  'throw new Error("حدث خطأ فني أثناء إرسال طلبك إلى الخادم (غالباً بسبب الحجم الزائد للملفات المرفقة). يرجى مراجعة أحجام مستنداتك وضغطها ثم المحاولة مجدداً.");',
  'throw new Error(`حدث خطأ فني أثناء إرسال طلبك إلى الخادم (الكود: ${response.status}). التفاصيل: ${responseText.substring(0, 150)}...`);'
);

fs.writeFileSync('src/components/ApplicationForm.tsx', file);

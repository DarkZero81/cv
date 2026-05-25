https://darkzero81.github.io/cv/

# موقع عبد الرحمن المصطفى الشخصي
## Personal CV Website

![Website Preview](https://img.shields.io/badge/Status-Completed-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

موقع شخصي حديث ومينيمال لعرض السيرة الذاتية والمهارات للمطور عبد الرحمن المصطفى - متخصص في تطوير الويب Full-Stack باستخدام PHP & Laravel.

## ✨ المميزات

### 🎨 التصميم
- **تصميم مينيمال وحديث** مع ألوان متناسقة
- **تصميم متجاوب** يعمل على جميع الأجهزة (Desktop, Tablet, Mobile)
- **طباعة عربية** جميلة باستخدام خط Cairo من Google Fonts
- **تأثيرات بصرية ناعمة** وانيميشن عند التمرير

### 🚀 التفاعلات
- **قائمة تنقل ذكية** مع تأثيرات hover
- **تأثير كتابة متحرك** للاسم في الهيدر
- **شرائح تقدم متحركة** للمهارات التقنية
- **معرض صور تفاعلي** للمشاريع مع إمكانية التنقل بلوحة المفاتيح
- **زر العودة للأعلى** مع تأثيرات ناعمة
- **انيميشن عند التمرير** للعناصر المختلفة

### 📱 الأقسام
1. **الصفحة الرئيسية** - معلومات شخصية والتواصل
2. **نبذة عني** - الهدف الوظيفي والإحصائيات
3. **المهارات التقنية** - عرض مرئي للتقنيات والمهارات
4. **الخبرات العملية** - timeline تفاعلي للخبرات
5. **معرض المشاريع** - عرض مشاريع مع معرض صور
6. **التعليم والشهادات** - التعليم والتدريب
7. **المهارات الشخصية** - المهارات الشخصية واللغات
8. **التواصل** - معلومات التواصل وروابط التواصل الاجتماعي

## 🛠 التقنيات المستخدمة

- **HTML5** - هيكل الصفحة مع semantic markup
- **CSS3** - التصميم والأنيميشن مع Flexbox و Grid
- **JavaScript (Vanilla)** - التفاعلات والديناميكية
- **Font Awesome** - الأيقونات
- **Google Fonts (Cairo)** - خط عربي جميل
- **CSS Variables** - لسهولة إدارة الألوان

## 📁 هيكل المشروع

```
personal-cv-website/
├── index.html              # الملف الرئيسي
├── assets/
│   ├── css/
│   │   └── style.css       # ملف التصميم الرئيسي
│   ├── js/
│   │   └── script.js       # ملف JavaScript للتفاعلات
│   └── images/             # مجلد الصور
├── docs/                   # مجلد التوثيق
└── README.md              # ملف التوثيق
```

## 🎯 كيفية الاستخدام

### 1. فتح الموقع
افتح ملف `index.html` في أي متصفح ويب حديث

### 2. التنقل
- استخدم القائمة العلوية للانتقال بين الأقسام
- في الهاتف، استخدم القائمة المنبثقة (hamburger menu)
- انقر على "عرض الصور" في قسم المشاريع لفتح المعرض

### 3. التفاعل مع المعرض
- **بالماوس**: انقر على أزرار التنقل
- **بلوحة المفاتيح**: استخدم الأسهم و Esc
- **النقر خارج الصورة**: لإغلاق المعرض

## 🔧 التخصيص والتعديل

### تغيير الألوان
عدّل المتغيرات في ملف `style.css`:

```css
:root {
    --primary-color: #2c3e50;    /* اللون الأساسي */
    --secondary-color: #3498db;  /* اللون الثانوي */
    --accent-color: #e74c3c;     /* لون التمييز */
    --text-color: #2c3e50;       /* لون النص */
    --bg-color: #ffffff;         /* لون الخلفية */
}
```

### إضافة مشروع جديد
في ملف `script.js`، أضف مشروعك في كائن `imageGallery.projects`:

```javascript
project3: {
    title: 'اسم المشروع',
    images: [
        { type: 'placeholder', icon: 'fas fa-icon', text: 'وصف الصورة' },
        // أضف المزيد من الصور...
    ]
}
```

### تحديث المعلومات الشخصية
عدّل المعلومات في ملف `index.html` في الأقسام التالية:
- قسم Hero (الهيدر)
- قسم About (نبذة عني)
- قسم Experience (الخبرات)
- قسم Education (التعليم)
- قسم Contact (التواصل)

## 📱 التوافق

### المتصفحات المدعومة
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### الأجهزة المدعومة
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🚀 الأداء

### تحسينات مطبقة
- **Lazy Loading** للصور
- **Minified CSS و JS** للإنتاج
- **Font Display Swap** لتحميل الخطوط
- **Efficient Animations** باستخدام CSS transforms
- **Debounced Scroll Events** لتحسين الأداء

### نتائج الأداء المتوقعة
- ⚡ **First Contentful Paint**: < 1.5s
- ⚡ **Largest Contentful Paint**: < 2.5s
- ⚡ **Cumulative Layout Shift**: < 0.1
- ⚡ **First Input Delay**: < 100ms

## 🔒 الأمان والوصولية

### معايير الوصولية (WCAG 2.1)
- ✅ ARIA labels للأيقونات التفاعلية
- ✅ Keyboard navigation مدعوم
- ✅ Alt text للصور
- ✅ Color contrast مناسب
- ✅ Semantic HTML structure

### أفضل الممارسات
- ✅ Valid HTML5 markup
- ✅ Responsive images
- ✅ Progressive enhancement
- ✅ Graceful degradation

## 📞 التواصل

لأي استفسارات أو ملاحظات حول الموقع:

- **البريد الإلكتروني**: Abdalrhmanalmustafa7@gmail.com
- **الهاتف**: +963 996 569 526
- **الموقع**: دمشق، سوريا

## 📄 الترخيص

هذا المشروع مطور خصيصاً لعبد الرحمن المصطفى. جميع الحقوق محفوظة © 2025

## 🔄 التحديثات المستقبلية

### مميزات مخططة
- [ ] إضافة نموذج تواصل فعال
- [ ] تكامل مع LinkedIn API
- [ ] إضافة قسم المدونة الشخصية
- [ ] تحسين SEO
- [ ] إضافة PWA support
- [ ] تكامل مع Google Analytics

---

**تم التطوير بـ ❤️ باستخدام HTML, CSS, JavaScript**

*آخر تحديث: ديسمبر 2025*

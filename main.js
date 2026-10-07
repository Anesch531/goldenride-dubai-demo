/* ==== CONFIG — fill these before showing the site ==== */
const CONFIG = {
  WHATSAPP_NUMBER: '{{WHATSAPP_NUMBER}}',
  PHONE: '{{PHONE}}',
  HOURS: '{{HOURS}}',
  GOOGLE_RATING: '4.8',
  GOOGLE_REVIEWS: '22',
  MAPS_URL: 'https://maps.app.goo.gl/7pimMKEe4TP1zuHx9?g_st=ic',
  INSTAGRAM_URL: 'https://www.instagram.com/goldenride.ae/'
};

const WA_MSG = {
  en: 'Hi Golden Ride, I would like to ask about PPF and window tinting for my car.',
  ar: 'مرحباً غولدن رايد، أريد الاستفسار عن حماية الطلاء (PPF) وتظليل النوافذ لسيارتي.'
};

const DOC_TITLE = {
  en: 'Golden Ride Car Care — PPF, Ceramic, Tinting · Dubai',
  ar: 'غولدن رايد لعناية السيارات — حماية الطلاء، السيراميك، التظليل · دبي'
};

const dict = {
  en: {
    concept: 'Concept preview prepared for Golden Ride Car Care',
    navServices: 'Services', navWork: 'Work', navProcess: 'Process',
    navLocation: 'Location', navContact: 'Contact',
    langAria: 'Switch language to Arabic', menuAria: 'Open menu',
    heroKicker: 'Umm Ramool · Dubai',
    heroT1: 'Golden Ride', heroT2: 'Car Care',
    heroLead: 'Paint protection film, ceramic coating, tinting and polishing — one workshop in Umm Ramool that takes the details seriously.',
    ctaWa: 'Chat on WhatsApp', ctaWaShort: 'WhatsApp', ctaServices: 'See the four services',
    reviewsLine: '{GOOGLE_RATING} ★ · {GOOGLE_REVIEWS} Google reviews',
    reviewsCta: 'Read reviews on Google',
    svcLabel: 'Services', svcTitle: 'Four services',
    svcNote: 'Protection, gloss, shade, shine.',
    s1t: 'Paint Protection Film',
    s1d: 'Clear film that takes the stone chips and road grit instead of your paint.',
    s2t: 'Ceramic Coating',
    s2d: 'A gloss layer that keeps the paint easier to wash and deeper to look at.',
    s3t: 'Window Tinting',
    s3d: 'The shade you choose, fitted to every window.',
    s4t: 'Professional Polishing',
    s4d: 'Machine polishing that lifts fine swirls and brings the gloss back.',
    workLabel: 'Gallery', workTitle: 'Recent work',
    prLabel: 'Process', prTitle: 'How a visit works',
    p1t: 'Message', p1d: 'Send your car model and the service you want.',
    p2t: 'Look together', p2d: 'A quick look at the paint and glass together.',
    p3t: 'Choose', p3d: 'Pick the treatment that fits the car.',
    p4t: 'Drive out', p4d: 'Collect your car when the work is done.',
    locLabel: 'Location', locTitle: 'Find us',
    addr1: 'Marrakech St, Umm Ramool',
    addr2: 'Dubai, United Arab Emirates',
    mapsCta: 'Open in Google Maps', dirShort: 'Directions',
    lgSmall: 'Umm Ramool', lgBig: 'Dubai',
    ctLabel: 'Contact', ctTitle: 'Message us on WhatsApp',
    ctLead: 'The fastest way to reach the shop.',
    hoursK: 'Hours', hoursV: '{HOURS}', phoneK: 'Phone', phoneV: '{PHONE}',
    footName: 'Golden Ride Car Care · Umm Ramool, Dubai',
    footRights: '© 2026 Golden Ride Car Care'
  },
  ar: {
    concept: 'نسخة تجريبية أُعدّت خصيصاً لغولدن رايد لعناية السيارات',
    navServices: 'الخدمات', navWork: 'أعمالنا', navProcess: 'الزيارة',
    navLocation: 'الموقع', navContact: 'تواصل',
    langAria: 'التبديل إلى الإنجليزية', menuAria: 'فتح القائمة',
    heroKicker: 'أم رمول · دبي',
    heroT1: 'غولدن رايد', heroT2: 'لعناية السيارات',
    heroLead: 'حماية الطلاء (PPF)، طلاء السيراميك، التظليل والتلميع — ورشة واحدة في أم رمول تهتم بأدق التفاصيل.',
    ctaWa: 'راسلنا على واتساب', ctaWaShort: 'واتساب', ctaServices: 'شوف الخدمات الأربعة',
    reviewsLine: '{GOOGLE_RATING} ★ · {GOOGLE_REVIEWS} تقييمًا على جوجل',
    reviewsCta: 'اقرأ التقييمات على جوجل',
    svcLabel: 'الخدمات', svcTitle: 'أربع خدمات',
    svcNote: 'حماية، لمعان، ظل، تلميع.',
    s1t: 'حماية الطلاء (PPF)',
    s1d: 'طبقة شفافة تمتص حصى الطريق وخدوشه بدلاً عن صبغة سيارتك.',
    s2t: 'طلاء السيراميك',
    s2d: 'طبقة لامعة تجعل التنظيف أسهل وتبرز عمق اللون.',
    s3t: 'تظليل النوافذ',
    s3d: 'الدرجة التي تختارها، على كل نافذة.',
    s4t: 'تلميع احترافي',
    s4d: 'تلميع بالماكينة يزيل الخطوط الدقيقة ويرجع اللمعان.',
    workLabel: 'معرض الصور', workTitle: 'من أعمالنا',
    prLabel: 'طريقة الزيارة', prTitle: 'كيف تمر الزيارة',
    p1t: 'راسلنا', p1d: 'أرسل لنا موديل سيارتك والخدمة التي تريدها.',
    p2t: 'نعاين معاً', p2d: 'نظرة سريعة على الطلاء والزجاج معاً.',
    p3t: 'تختار', p3d: 'اختر العناية المناسبة لسيارتك.',
    p4t: 'تستلم', p4d: 'استلم سيارتك بعد انتهاء العمل.',
    locLabel: 'الموقع', locTitle: 'مكاننا',
    addr1: 'شارع مراكش، أم رمول',
    addr2: 'دبي، الإمارات العربية المتحدة',
    mapsCta: 'افتح في خرائط جوجل', dirShort: 'الاتجاهات',
    lgSmall: 'أم رمول', lgBig: 'دبي',
    ctLabel: 'تواصل', ctTitle: 'راسلنا على واتساب',
    ctLead: 'أسرع طريقة للتواصل مع الورشة.',
    hoursK: 'الدوام', hoursV: '{HOURS}', phoneK: 'الهاتف', phoneV: '{PHONE}',
    footName: 'غولدن رايد لعناية السيارات · أم رمول، دبي',
    footRights: '© 2026 غولدن رايد لعناية السيارات'
  }
};

let lang = 'en';

function t(key) {
  const s = (dict[lang] && dict[lang][key]) || dict.en[key] || key;
  return s.replace(/\{(\w+)\}/g, (m, k) => (k in CONFIG ? CONFIG[k] : m));
}

function waHref() {
  const num = String(CONFIG.WHATSAPP_NUMBER).replace(/\D/g, '');
  const base = num ? 'https://wa.me/' + num : 'https://wa.me/';
  return base + '?text=' + encodeURIComponent(WA_MSG[lang]);
}

function applyLang(next) {
  lang = next === 'ar' ? 'ar' : 'en';
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = DOC_TITLE[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('[data-wa]').forEach((el) => {
    el.href = waHref();
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'ar' ? 'EN' : 'العربية';

  try { localStorage.setItem('gr-lang', lang); } catch (e) { /* private mode */ }
}

function initLang() {
  const params = new URLSearchParams(location.search);
  let saved = null;
  try { saved = localStorage.getItem('gr-lang'); } catch (e) { /* ignore */ }
  const fromUrl = params.get('lang');
  const start = fromUrl || saved || 'en';
  applyLang(start);
}

function initLinks() {
  const maps = document.getElementById('mapsLink');
  const maps2 = document.getElementById('mapsLink2');
  const reviews = document.getElementById('reviewsLink');
  const insta = document.getElementById('instaLink');
  if (maps) maps.href = CONFIG.MAPS_URL;
  if (maps2) maps2.href = CONFIG.MAPS_URL;
  if (reviews) reviews.href = CONFIG.MAPS_URL;
  if (insta) insta.href = CONFIG.INSTAGRAM_URL;
}

function initMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initLinks();
  initLang();
  initMenu();
  initReveal();
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => applyLang(lang === 'ar' ? 'en' : 'ar'));
  }
});

/* ============================================================
   ARABIC COPY — for review (written natively, MSA with light Gulf feel)
   ============================================================
   concept          نسخة تجريبية أُعدّت خصيصاً لغولدن رايد لعناية السيارات
   heroKicker       أم رمول · دبي
   heroT1/T2        غولدن رايد / لعناية السيارات
   heroLead         حماية الطلاء (PPF)، طلاء السيراميك، التظليل والتلميع —
                    ورشة واحدة في أم رمول تهتم بأدق التفاصيل.
   ctaWa            راسلنا على واتساب   ·   ctaServices شوف الخدمات الأربعة
    reviewsLine      {GOOGLE_RATING} ★ · {GOOGLE_REVIEWS} تقييمًا على جوجل
   reviewsCta       اقرأ التقييمات على جوجل
   svcTitle         أربع خدمات   ·   svcNote حماية، لمعان، ظل، تلميع.
   s1t/s1d          حماية الطلاء (PPF) / طبقة شفافة تمتص حصى الطريق وخدوشه
                    بدلاً عن صبغة سيارتك.
   s2t/s2d          طلاء السيراميك / طبقة لامعة تجعل التنظيف أسهل وتبرز عمق اللون.
   s3t/s3d          تظليل النوافذ / الدرجة التي تختارها، على كل نافذة.
   s4t/s4d          تلميع احترافي / تلميع بالماكينة يزيل الخطوط الدقيقة ويرجع اللمعان.
   workTitle        من أعمالنا
   prTitle          كيف تمر الزيارة
   p1..p4           راسلنا: أرسل لنا موديل سيارتك والخدمة التي تريدها.
                    نعاين معاً: نظرة سريعة على الطلاء والزجاج معاً.
                    تختار: اختر العناية المناسبة لسيارتك.
                    تستلم: استلم سيارتك بعد انتهاء العمل.
   locTitle         مكاننا  ·  addr1 شارع مراكش، أم رمول
                          ·  addr2 دبي، الإمارات العربية المتحدة
   mapsCta          افتح في خرائط جوجل  ·  dirShort الاتجاهات
   ctTitle          راسلنا على واتساب  ·  ctLead أسرع طريقة للتواصل مع الورشة.
   hoursK/phoneK    الدوام / الهاتف
   footName         غولدن رايد لعناية السيارات · أم رمول، دبي
   WA_MSG.ar        مرحباً غولدن رايد، أريد الاستفسار عن حماية الطلاء (PPF)
                    وتظليل النوافذ لسيارتي.
   Notes: Arabic uses no letter-spacing (disabled in CSS), line-height 1.8,
   Latin numerals kept (Gulf convention), brand name transliterated.
   ============================================================ */

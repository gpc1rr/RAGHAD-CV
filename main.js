// --- 1. قاموس النصوص للتبديل بين اللغات (عربي / إنجليزي) ---
const translations = {
    en: {
        langText: "عربي / Arabic",
        navCertText: "Certificates",
        nameText: "Raghad Bandar",
        titleText: "Web Development Intern",
        profileTitle: "PROFILE",
        profileContent: "Web Programming and Development Technology student seeking a cooperative training opportunity to apply academic skills in building modern web applications and gain practical experience.",
        educationTitle: "EDUCATION",
        degreeText: "Associate Degree in Programming and Development Technology",
        collegeText: "Technical College",
        dateText: "Present - 2023",
        skillsTitle: "SKILLS",
        softSkill1: "Problem Solving",
        softSkill2: "Teamwork",
        coursesTitle: "COURSES",
        course1: "Artificial Intelligence Principles (SDAIA)",
        course2: "Advanced AI Concepts and Applications (SDAIA)",
        course3: "Using Modern Technologies for Business Development and Management (Ariad Training Institute)",
        galleryTitle: "CERTIFICATES GALLERY",
        certText1: "AI Principles - SDAIA",
        certText2: "Advanced AI - SDAIA",
        certText3: "Business Development - Ariad",
        languageTitle: "LANGUAGE",
        langArabic: "Arabic:",
        langArabicLevel: "Native",
        langEnglish: "English:",
        langEnglishLevel: "intermediate"
    },
    ar: {
        langText: "English",
        navCertText: "الشهادات",
        nameText: "رغد بندر",
        titleText: "متدربة في تطوير الويب",
        profileTitle: "الملخص المهني",
        profileContent: "طالبة تكنولوجيا برمجة وتطوير الويب تبحث عن فرصة تدريب تعاوني لتطبيق مهاراتها الأكاديمية في بناء تطبيقات ويب حديثة واكتساب خبرة عملية.",
        educationTitle: "التعليم",
        degreeText: "دبلوم في تكنولوجيا برمجة وتطوير الويب",
        collegeText: "الكلية التقنية",
        dateText: "الحاضر - 2023",
        skillsTitle: "المهارات",
        softSkill1: "حل المشكلات",
        softSkill2: "العمل الجماعي",
        coursesTitle: "الدورات التدريبية",
        course1: "مبادئ الذكاء الاصطناعي (سدايا)",
        course2: "مفاهيم الذكاء الاصطناعي وتطبيقاته المتقدمة (سدايا)",
        course3: "استخدام التقنيات الحديثة لتطوير وإدارة الأعمال (معهد أرياد التدريبي)",
        galleryTitle: "معرض الشهادات",
        certText1: "مبادئ الذكاء الاصطناعي - سدايا",
        certText2: "الذكاء الاصطناعي المتقدم - سدايا",
        certText3: "تطوير الأعمال - أرياد",
        languageTitle: "اللغات",
        langArabic: "العربية:",
        langArabicLevel: "اللغة الأم",
        langEnglish: "الإنجليزية:",
        langEnglishLevel: "متوسط"
    }
};

let currentLang = 'en'; // اللغة الافتراضية إنجليزي

// دالة آمنة لتحديث النصوص
function safeSetText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = text;
    }
}

// زر التبديل بين اللغات
const langToggleBtn = document.getElementById('langToggleBtn');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        
        // تغيير اتجاه الصفحة (من اليمين لليسار والعكس) وتغيير الخط
        if (currentLang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
            document.body.classList.add('arabic-font');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
            document.body.classList.remove('arabic-font');
        }

        const t = translations[currentLang];

        // تحديث النصوص في الصفحة بشكل آمن
        safeSetText('lang-text', t.langText);
        safeSetText('nav-cert-text', t.navCertText);
        safeSetText('name-text', t.nameText);
        safeSetText('title-text', t.titleText);
        safeSetText('profile-title', t.profileTitle);
        safeSetText('profile-content', t.profileContent);
        safeSetText('education-title', t.educationTitle);
        safeSetText('degree-text', t.degreeText);
        safeSetText('college-text', t.collegeText);
        safeSetText('date-text', t.dateText);
        safeSetText('skills-title', t.skillsTitle);
        safeSetText('soft-skill-1', t.softSkill1);
        safeSetText('soft-skill-2', t.softSkill2);
        safeSetText('courses-title', t.coursesTitle);
        safeSetText('course-1', t.course1);
        safeSetText('course-2', t.course2);
        safeSetText('course-3', t.course3);
        safeSetText('gallery-title', t.galleryTitle);
        safeSetText('cert-text-1', t.certText1);
        safeSetText('cert-text-2', t.certText2);
        safeSetText('cert-text-3', t.certText3);
        safeSetText('language-title', t.languageTitle);
        safeSetText('lang-arabic', t.langArabic);
        safeSetText('lang-arabic-level', t.langArabicLevel);
        safeSetText('lang-english', t.langEnglish);
        safeSetText('lang-english-level', t.langEnglishLevel);
    });
}


// --- 2. جافا سكريبت معرض الشهادات (Slideshow) ---
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    if (dots.length > 0 && dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}